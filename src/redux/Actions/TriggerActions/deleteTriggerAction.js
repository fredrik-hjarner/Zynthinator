import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const deleteTriggerAction =
  (ids) => {
    store.dispatch({
      type: actionTypes.DELETE_TRIGGER,
      payload: {
        ids,
      },
    });
  };
