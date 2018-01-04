import {
  actionTypes,
  store,
} from './commonImports';

export const createKnobAction =
  (params) => {
    store.dispatch({
      type: actionTypes.CREATE_KNOB,
      ...params,
    });
  };
