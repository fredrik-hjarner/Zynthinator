import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

// -------------------
// Actions
// -------------------

export const createNodeAction =
  (params) => {
    store.dispatch({
      type: actionTypes.CREATE_NODE,
      ...params,
    });
  };

export const deleteAllNodesAction =
  () => {
    store.dispatch({
      type: actionTypes.DELETE_ALL_NODES,
    });
  };

/**
 * @param nodes An array of node-ids.
 */
export const deleteNodeAction =
  (nodes) => {
    store.dispatch({
      type: actionTypes.DELETE_NODE,
      nodes,
    });
  };
