import {
  actionTypes,
  store,
} from './commonImports';

export const createTriggerAction =
  (params) => {
    store.dispatch({
      type: actionTypes.CREATE_TRIGGER,
      ...params,
    });
  };
