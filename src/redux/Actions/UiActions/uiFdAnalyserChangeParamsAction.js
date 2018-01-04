import {
  actionTypes,
  store,
} from '../commonImports';

export const uiFdAnalyserChangeParamsAction =
  (id, param, value) =>
    store.dispatch({
      type: actionTypes.UI_FD_ANALYSER_CHANGE_PARAMS,
      id,
      param,
      value,
    });
