import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

// -------------------
// Actions
// -------------------

export const createKnobAction =
  (params) => {
    store.dispatch({
      type: actionTypes.CREATE_KNOB,
      ...params,
    });
  };

export const deleteKnobAction =
  (ids) => {
    store.dispatch({
      type: actionTypes.DELETE_KNOB,
      payload: {
        ids,
      },
    });
  };

export const moveKnobAction =
  (id, value) => {
    store.dispatch({
      type: actionTypes.MOVE_KNOB,
      id,
      value,
    });
  };
