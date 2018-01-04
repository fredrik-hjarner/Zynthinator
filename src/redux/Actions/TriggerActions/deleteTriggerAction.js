import {
  actionTypes,
  store,
} from './commonImports';

export const deleteTriggerAction =
  (id) => {
    store.dispatch({
      type: actionTypes.DELETE_TRIGGER,
      id,
    });
  };
