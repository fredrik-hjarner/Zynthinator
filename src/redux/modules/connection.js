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
