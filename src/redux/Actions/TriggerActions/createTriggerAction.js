import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const createTriggerAction =
  (params) => {
    store.dispatch({
      type: actionTypes.CREATE_TRIGGER,
      ...params,
    });
  };
