import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const moveKnobAction =
  (id, value) => {
    store.dispatch({
      type: actionTypes.MOVE_KNOB,
      id,
      value,
    });
  };
