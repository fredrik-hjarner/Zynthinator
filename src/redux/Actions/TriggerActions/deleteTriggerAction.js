import {
  actionTypes,
  store,
} from './commonImports';

export const deleteTriggerAction =
  (ids) => {
    store.dispatch({
      type: actionTypes.DELETE_TRIGGER,
      payload: {
        ids,
      },
    });
  };
