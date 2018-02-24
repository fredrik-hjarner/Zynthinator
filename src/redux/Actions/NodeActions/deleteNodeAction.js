import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

/**
 * @param nodes An array of node id:s.
 */
export const deleteNodeAction =
  (nodes) => {
    store.dispatch({
      type: actionTypes.DELETE_NODE,
      nodes,
    });
  };
