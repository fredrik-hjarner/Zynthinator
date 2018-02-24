import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const clickTriggerAction =
  (id) => {
    store.dispatch({
      type: actionTypes.CLICK_TRIGGER,
      id,
    });
  };

export const createTriggerAction =
  (params) => {
    store.dispatch({
      type: actionTypes.CREATE_TRIGGER,
      ...params,
    });
  };

export const deleteTriggerAction =
  (ids) => {
    store.dispatch({
      type: actionTypes.DELETE_TRIGGER,
      payload: {
        ids,
      },
    });
  };

export const triggerHandledAction =
  (id) => {
    store.dispatch({
      type: actionTypes.TRIGGER_HANDLED,
      id,
    });
  };
