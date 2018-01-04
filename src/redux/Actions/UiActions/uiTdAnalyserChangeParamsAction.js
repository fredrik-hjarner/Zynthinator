import {
  actionTypes,
  store,
} from '../commonImports';

export const uiTdAnalyserChangeParamsAction =
  (id, param, value) =>
    store.dispatch({
      type: actionTypes.UI_TD_ANALYSER_CHANGE_PARAMS,
      id,
      param,
      value,
    });
