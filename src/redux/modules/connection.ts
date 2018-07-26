import { evolvePaths, propInArray } from 'helpers/ramdaHelpers';
import _ from 'lodash';
import * as R from 'ramda';
import { stateQueries } from 'redux/StateQueries';
import { connectionExists } from 'redux/StateQueries/new-state-queries/connection-queries';
import { store } from 'redux/Store';
import { Action } from 'types';

// -------------------
// Consts
// -------------------

const CREATE_CONNECTION = 'CREATE_CONNECTION';
const DELETE_CONNECTION = 'DELETE_CONNECTION';
const EJECT_NODE = 'EJECT_NODE';
const INJECT_NODE = 'INJECT_NODE';

// -------------------
// Actions
// -------------------

export const createConnectionAction: Action = (params) => {
	store.dispatch({
		type: CREATE_CONNECTION,
		...params, // TODO: this is crap. Define it more specifically.
	});
};

export const deleteConnectionAction: Action = (ids: string[]) => {
	store.dispatch({
		payload: { ids },
		type: DELETE_CONNECTION,
	});
};

export const ejectNodeAction: Action = (nodeId: string) => {
	store.dispatch({
		payload: { nodeId },
		type: EJECT_NODE,
	});
};

export const injectNodeAction: Action = (nodeId: string, connectionId: string) => {
	store.dispatch({
		payload: {
			connectionId,
			nodeId,
		},
		type: INJECT_NODE,
	});
};

// ----------------
// Reducers
// ----------------

export const connectionReducer = (state, action: Action) => {
	switch (action.type) {
		case CREATE_CONNECTION:
			return createConnectionReducer(state, action); // eslint-disable-line
		case DELETE_CONNECTION:
			return deleteConnectionReducer(state, action); // eslint-disable-line
		case EJECT_NODE:
			return ejectNodeReducer(state, action); // eslint-disable-line
		case INJECT_NODE:
			return injectNodeReducer(state, action); // eslint-disable-line
		default:
			return state;
	}
};

/**
 * childNodes = [
 *   { nodeId: number, input: string },
 *   ...
 * ]
 */
function createConnectionReducer(state, { parentNodeIds, childNodes }: Action) {
	/**
	 * Confirm that the connection is possible/valid.
	 *  - That means that:
	 *    * parent exists
	 *    * child exists
	 *    * parent output node is valid
	 *    * child input node is valid
	 *    * that this exact connection doesn't already exist.
	 */

	/**
	 * Check types. todo better to do with Flow or TypeScript.
	 */
	if (
		!parentNodeIds ||
		!childNodes ||
		R.any(R.isNil, parentNodeIds) ||
		R.any(R.isNil, childNodes) ||
		R.any(
			R.compose(R.isNil, R.prop('nodeId')),
			childNodes,
		)
	) {
		debugger; // tslint:disable-line
		alert('Error! parentNodeIds or childNodes are fucked up.');
	}

	// create the connections.
	let connectionId = state.nodeManagement.highestConnectionIdYet;

	const connectionsValues = [] as any[]; // TODO: stricter type!
	childNodes.forEach((childNode) => {
		// connect each parent node to this child node.
		parentNodeIds.forEach((parentNodeId) => {
			// create a Connection
			// but not if it already exists
			if (connectionExists(state, parentNodeId, childNode.nodeId, childNode.input)) {
				return; // todo. this should work right?
			}

			connectionsValues.push({
				childNodeId: childNode.nodeId,
				childNodeInput: childNode.input,
				enabled: true,
				id: ++connectionId,
				parentNodeId,
			});
		});
	});

	const connections = _.keyBy(connectionsValues, R.prop('id'));

	return R.evolve({
		nodeManagement: {
			connections: R.merge(R.__, connections),
			highestConnectionIdYet: () => connectionId,
		},
	}, state);
}

function deleteConnectionReducer(state, { payload: { ids } }: Action) {
	return evolvePaths(
		{ 'nodeManagement.connections': R.reject(propInArray('id', ids)) },
		state,
	);
}

function ejectNodeReducer(state, action) {
	/**
	 * TODO. Temporarily simply replace the node with a
	 * UnityGain node.
	 *
	 * Not all types of connections are actually legal.
	 * Only when the input param is 'input'.
	 */

	// Find all connections that the node is in
	const connections =
		stateQueries.getConnectionsByNodeId(state.nodeManagement.connections, action.payload.nodeId);

	// then remove the illegal connections.
	const filteredConnections = R.filter(R.propEq('childNodeInput', 'input'), connections);

	const connectionIds = filteredConnections.map(x => x.id);

	// Save the parents and the children of these connections
	const connectionsWhereNodeIdIsChild =
		filteredConnections.filter(R.propEq('childNodeId', action.payload.nodeId));
	const parentNodeIds = connectionsWhereNodeIdIsChild.map(R.prop('parentNodeId'));

	const connectionsWhereNodeIdIsParent =
		filteredConnections.filter(R.propEq('parentNodeId', action.payload.nodeId));
	const childNodeIds = connectionsWhereNodeIdIsParent.map(R.prop('childNodeId'));

	// Delete the connections.
	// tslint:disable-next-line
	const _state = deleteConnectionReducer(state, { payload: { ids: connectionIds } });

	// Create new connections.
	// All parentNodeIds should connect to every childNodeId.
	// I already have N-to-N capability so that should be possible right away.
	// tslint:disable-next-line
	const _action = {
		childNodes: childNodeIds.map(nodeId => ({
			input: 'input',
			nodeId,
		})),
		parentNodeIds,
	};

	return createConnectionReducer(_state, _action);
}

function injectNodeReducer(state, { payload: { nodeId, connectionId } }: Action) {
	// Save the parent and child.
	const connection =
		stateQueries.getConnectionById({
			connectionId,
			connections: state.nodeManagement.connections,
		});
	const { parentNodeId, childNodeId } = connection;

	// Break the connection.
	// tslint:disable-next-line
	let _state = deleteConnectionReducer(state, { payload: { ids: [connectionId] } });

	// Reconnect it with the node injected.
	// connect the parent to me
	// connect me to the child
	_state = createConnectionReducer(_state, {
		childNodes: [{
			input: 'input',
			nodeId,
		}],
		parentNodeIds: [parentNodeId],
	});

	_state = createConnectionReducer(_state, {
		childNodes: [{
			input: 'input',
			nodeId: childNodeId,
		}],
		parentNodeIds: [nodeId],
	});

	return _state;
}
