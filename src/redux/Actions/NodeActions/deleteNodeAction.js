import {
  actionTypes,
  store,
} from './commonImports';

export const deleteNodeAction =
  (nodes) => {
    store.dispatch({
      type: actionTypes.DELETE_NODE,
      nodes,
    });
  };
