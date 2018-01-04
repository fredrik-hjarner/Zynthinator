import {
  actionTypes,
  store,
} from './commonImports';

export const deleteKnobAction =
  (id) => {
    store.dispatch({
      type: actionTypes.DELETE_KNOB,
      id,
    });
  };
