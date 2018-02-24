import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const triggerHandledAction =
  (id) => {
    store.dispatch({
      type: actionTypes.TRIGGER_HANDLED,
      id,
    });
  };
