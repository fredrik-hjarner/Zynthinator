import {
  actionTypes,
  store,
} from './commonImports';

export const triggerHandledAction =
  (id) => {
    store.dispatch({
      type: actionTypes.TRIGGER_HANDLED,
      id,
    });
  };
