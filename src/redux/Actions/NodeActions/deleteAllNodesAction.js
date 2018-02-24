import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const deleteAllNodesAction =
  () => {
    store.dispatch({
      type: actionTypes.DELETE_ALL_NODES,
    });
  };
