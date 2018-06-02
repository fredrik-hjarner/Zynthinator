import { store } from 'redux/Store';

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

export const createConnectionAction = (params) => {
  store.dispatch({
    type: CREATE_CONNECTION,
    ...params,
  });
};

export const deleteConnectionAction = (ids) => {
  store.dispatch({
    type: DELETE_CONNECTION,
    payload: { ids },
  });
};

export const ejectNodeAction = (nodeId) => {
  store.dispatch({
    type: EJECT_NODE,
    payload: { nodeId },
  });
};

export const injectNodeAction = (nodeId, connectionId) => {
  store.dispatch({
    type: INJECT_NODE,
    payload: {
      nodeId,
      connectionId,
    },
  });
};

// -------------------
// Reducers
// -------------------

import _ from 'lodash';
import * as R from 'ramda';
import { evolvePaths, propInArray } from 'helpers/ramdaHelpers';
import { stateQueries } from 'redux/StateQueries';
import { connectionExists } from 'redux/StateQueries/new-state-queries/connection-queries';

// ----------------
// Reducers
// ----------------

export const connectionReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_CONNECTION':
      return createConnectionReducer(state, action); // eslint-disable-line
    case 'DELETE_CONNECTION':
      return deleteConnectionReducer(state, action); // eslint-disable-line
    case 'EJECT_NODE':
      return ejectNodeReducer(state, action); // eslint-disable-line
    case 'INJECT_NODE':
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
function createConnectionReducer(state, { parentNodeIds, childNodes }) {
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
      childNodes
    )
  ) {
    debugger;
    alert('Error! parentNodeIds or childNodes are fucked up.');
  }

  // create the connections.
  let connectionId = state.nodeManagement.highestConnectionIdYet;

  const connectionsValues = [];
  childNodes.forEach((childNode) => {
    // connect each parent node to this child node.
    parentNodeIds.forEach((parentNodeId) => {
      // create a Connection
      // but not if it already exists
      if (connectionExists(state, parentNodeId, childNode.nodeId, childNode.input)) {
        return; // todo. this should work right?
      }

      connectionsValues.push({
        id: ++connectionId,
        parentNodeId,
        childNodeId: childNode.nodeId,
        childNodeInput: childNode.input,
        enabled: true
      });
    });
  });

  const connections = _.keyBy(connectionsValues, R.prop('id'));

  return R.evolve({
    nodeManagement: {
      highestConnectionIdYet: () => connectionId,
      connections: R.merge(R.__, connections),
    },
  }, state);
}

function deleteConnectionReducer(state, { payload: { ids } }) {
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
  const _state = deleteConnectionReducer(state, { payload: { ids: connectionIds } });

  // Create new connections.
  // All parentNodeIds should connect to every childNodeId.
  // I already have N-to-N capability so that should be possible right away.
  const _action = {
    parentNodeIds,
    childNodes:
      childNodeIds.map(nodeId =>
        ({
          nodeId,
          input: 'input',
        })),
  };
  
  return createConnectionReducer(_state, _action);
}

function injectNodeReducer(state, { payload: { nodeId, connectionId } }) {
  // Save the parent and child.
  const connection =
    stateQueries.getConnectionById({
      connections: state.nodeManagement.connections,
      connectionId,
    });
  const { parentNodeId, childNodeId } = connection;

  // Break the connection.
  let _state = deleteConnectionReducer(state, { payload: { ids: [connectionId] } });

  // Reconnect it with the node injected.
  // connect the parent to me
  // connect me to the child
  _state = createConnectionReducer(_state, {
    parentNodeIds: [parentNodeId],
    childNodes: [{
      nodeId,
      input: 'input',
    }],
  });

  _state = createConnectionReducer(_state, {
    parentNodeIds: [nodeId],
    childNodes: [{
      nodeId: childNodeId,
      input: 'input',
    }],
  });

  return _state;
}
