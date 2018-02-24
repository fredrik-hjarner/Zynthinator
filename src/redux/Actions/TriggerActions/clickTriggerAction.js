import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const clickTriggerAction =
  (id) => {
    store.dispatch({
      type: actionTypes.CLICK_TRIGGER,
      id,
    });
  };
