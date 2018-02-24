import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const createKnobAction =
  (params) => {
    store.dispatch({
      type: actionTypes.CREATE_KNOB,
      ...params,
    });
  };
