import {
  actionTypes,
  store,
} from './commonImports';

export const clickTriggerAction =
  (id) => {
    store.dispatch({
      type: actionTypes.CLICK_TRIGGER,
      id,
    });
  };
