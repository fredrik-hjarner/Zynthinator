import {
  actionTypes,
  store,
} from './commonImports';

export const deleteAllNodesAction =
  () => {
    store.dispatch({
      type: actionTypes.DELETE_ALL_NODES,
    });
  };
