import {
  actionTypes,
  store,
} from './commonImports';

export const createConnectionAction =
  (params) => {
    store.dispatch({
      type: actionTypes.CREATE_CONNECTION,
      ...params,
    });
  };
