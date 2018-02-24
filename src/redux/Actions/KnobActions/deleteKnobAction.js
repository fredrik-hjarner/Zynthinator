import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const deleteKnobAction =
  (ids) => {
    store.dispatch({
      type: actionTypes.DELETE_KNOB,
      payload: {
        ids,
      },
    });
  };
