import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const injectNodeAction =
  (nodeId, connectionId) => {
    store.dispatch({
      type: actionTypes.INJECT_NODE,
      payload: {
        nodeId,
        connectionId,
      },
    });
  };
