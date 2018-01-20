import {
  actionTypes,
  store,
} from './commonImports';

export const ejectNodeAction =
  (nodeId) => {
    store.dispatch({
      type: actionTypes.EJECT_NODE,
      payload: {
        nodeId,
      },
    });
  };
