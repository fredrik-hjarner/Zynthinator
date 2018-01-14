import {
  actionTypes,
  store,
} from './commonImports';

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
