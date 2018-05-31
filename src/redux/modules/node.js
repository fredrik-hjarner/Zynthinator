import { store } from 'redux/Store';

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
