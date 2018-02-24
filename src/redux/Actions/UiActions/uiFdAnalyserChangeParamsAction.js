import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const uiFdAnalyserChangeParamsAction =
  (id, param, value) =>
    store.dispatch({
      type: actionTypes.UI_FD_ANALYSER_CHANGE_PARAMS,
      id,
      param,
      value,
    });
