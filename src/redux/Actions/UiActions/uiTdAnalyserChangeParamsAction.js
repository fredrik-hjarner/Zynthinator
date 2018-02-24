import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const uiTdAnalyserChangeParamsAction =
  (id, param, value) =>
    store.dispatch({
      type: actionTypes.UI_TD_ANALYSER_CHANGE_PARAMS,
      id,
      param,
      value,
    });
