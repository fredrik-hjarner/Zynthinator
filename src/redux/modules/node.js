import { store } from 'redux/Store';
import _ from 'lodash';
import * as R from 'ramda';
import { propInArray } from 'helpers/ramdaHelpers';
import { initialState } from 'redux/InitialState';

// -------------------
// Consts
// -------------------

const CREATE_NODE = 'CREATE_NODE';
const DELETE_NODE = 'DELETE_NODE';
const DELETE_ALL_NODES = 'DELETE_ALL_NODES';

// -------------------
// Actions
// -------------------

export const createNodeAction = (params) => {
  store.dispatch({
    type: CREATE_NODE,
    ...params,
  });
};

export const deleteAllNodesAction = () => {
  store.dispatch({
    type: DELETE_ALL_NODES,
  });
};

/**
 * @param nodes An array of node-ids.
 */
export const deleteNodeAction = (nodes) => {
  store.dispatch({
    type: DELETE_NODE,
    nodes,
  });
};

// -------------------
// Reducers
// -------------------

export const nodeReducer = (state, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return createNodeReducer(state, action); // eslint-disable-line
    case DELETE_NODE:
      return deleteNodeReducer(state, action); // eslint-disable-line
    case DELETE_ALL_NODES:
      return deleteAllNodesReducer(state, action); // eslint-disable-line
    default:
      return state;
  }
};

export function createNodeReducer(state, action) {
  const params = _.omit(action, 'type');
  let newState = state;
  let nodeId;
  if ('id' in action) {
    /**
     * This means that we edit a node,
     * not create.
     */
    nodeId = action.id;
  } else {
    nodeId = state.nodeManagement.highestNodeIdYet + 1;
    newState =
      R.assocPath(
        ['nodeManagement', 'highestNodeIdYet'],
        nodeId,
        state,
      );
  }

  const stateBeforeAddingPositions = R.assocPath(
    ['nodeManagement', 'nodes', `${nodeId}`],
    {
      id: nodeId,
      ...params,
    },
    newState,
  );

  return R.assocPath(
    ['ui', 'nodeGraphPositions', `${nodeId}`], // todo this is actually not like how I usually do it. nodeId??
    {
      // node: uuidv4() // todo
      nodeId,
      x: 0,
      y: 0
    },
    stateBeforeAddingPositions,
  );
}
  
function deleteAllNodesReducer() {
  return initialState;
}

export function deleteNodeReducer(state, action) {
  const { nodes } = action;

  /**
   * 
   */
  const nodesAsInts =
    R.map(
      R.curry(parseInt)(R.__, 10),
      nodes,
    );

  const propInNodes =
    prop =>
      propInArray(prop, nodesAsInts);

  return R.evolve({
    nodeManagement: {
      nodes:
        R.reject(propInNodes('id')),
      connections:
        R.reject(R.either(
          propInNodes('parentNodeId'),
          propInNodes('childNodeId'),
        )),
      knobs:
        R.reject(propInNodes('connectedToWhichNode')),
      triggers:
        R.reject(propInNodes('connectedToWhichNode')),
    },
    /**
     * todo, this is crap. should probably not looks for deleted
     * Analysers when deleting every node type.
     * Actually there should probably be a UI module/system that
     * subscribes to "node" changes and updates "ui" state accordingly.
     */
    ui: {
      components:
        R.reject(propInNodes('nodeId')),
    },
  }, state);
}
