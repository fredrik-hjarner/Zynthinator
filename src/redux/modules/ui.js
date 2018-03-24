import * as R from 'ramda';
import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const closeModalAction = () =>
  store.dispatch({ type: actionTypes.CLOSE_MODAL });

export const openModalAction = (modal, props) =>
  store.dispatch({
    type: actionTypes.OPEN_MODAL,
    modal,
    props,
  });

export const openMessageModalAction = ({ header, content, icon, color }) =>
  store.dispatch({
    type: actionTypes.OPEN_MESSAGE_MODAL,
    payload: {
      header,
      content,
      icon,
      color
    }
  });

export const uiFdAnalyserChangeParamsAction = (id, param, value) =>
  store.dispatch({
    type: actionTypes.UI_FD_ANALYSER_CHANGE_PARAMS,
    id,
    param,
    value,
  });

export const uiTdAnalyserChangeParamsAction = (id, param, value) =>
  store.dispatch({
    type: actionTypes.UI_TD_ANALYSER_CHANGE_PARAMS,
    id,
    param,
    value,
  });

// --------------------------
// Reducers
// ---------------------------

export const openMessageModalReducer = (state, { payload: { header, content, icon, color } }) =>
  R.evolve({
    ui: {
      messageModal: () => ({
        header,
        content,
        icon,
        color
      }) 
    }
  }, state);
