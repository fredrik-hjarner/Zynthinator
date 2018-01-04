import {
  actionTypes,
  store,
} from './commonImports';

export const moveKnobAction =
  (id, value) => {
    store.dispatch({
      type: actionTypes.MOVE_KNOB,
      id,
      value,
    });
  };
