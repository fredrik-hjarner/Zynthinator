import {
  actionTypes,
  store,
} from './commonImports';

export const deleteNodeAction =
  (nodeId) => {
    store.dispatch({
      type: actionTypes.DELETE_NODE,
      nodeId,
    });
  };
