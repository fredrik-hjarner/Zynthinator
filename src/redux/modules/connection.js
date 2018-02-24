import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

// -------------------
// Actions
// -------------------

export const createConnectionAction =
  (params) => {
    store.dispatch({
      type: actionTypes.CREATE_CONNECTION,
      ...params,
    });
  };

export const deleteConnectionAction =
  (ids) => {
    store.dispatch({
      type: actionTypes.DELETE_CONNECTION,
      payload: {
        ids,
      },
    });
  };

export const ejectNodeAction =
  (nodeId) => {
    store.dispatch({
      type: actionTypes.EJECT_NODE,
      payload: {
        nodeId,
      },
    });
  };

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
