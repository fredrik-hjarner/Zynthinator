import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const ejectNodeAction =
  (nodeId) => {
    store.dispatch({
      type: actionTypes.EJECT_NODE,
      payload: {
        nodeId,
      },
    });
  };
