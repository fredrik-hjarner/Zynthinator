import {
  actionTypes,
  store,
} from './commonImports';

export const createNodeAction =
  (params) => {
    store.dispatch({
      type: actionTypes.CREATE_NODE,
      ...params,
    });
  };
