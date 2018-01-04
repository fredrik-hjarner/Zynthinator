import {
  actionTypes,
  store,
} from './commonImports';

export const createGroupAction =
  (params) => {
    store.dispatch({
      type: actionTypes.CREATE_GROUP,
      ...params,
    });
  };
