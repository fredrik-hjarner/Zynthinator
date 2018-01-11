import {
  actionTypes,
  store,
} from './commonImports';

export const deleteKnobAction =
  (ids) => {
    store.dispatch({
      type: actionTypes.DELETE_KNOB,
      payload: {
        ids,
      },
    });
  };
