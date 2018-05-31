import * as R from 'ramda';
import { store } from 'redux/Store';

// -------------------
// Consts
// -------------------

const OPEN_MODAL = 'OPEN_MODAL';
const OPEN_MESSAGE_MODAL = 'OPEN_MESSAGE_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const UI_TD_ANALYSER_CHANGE_PARAMS = 'UI_TD_ANALYSER_CHANGE_PARAMS';
const UI_FD_ANALYSER_CHANGE_PARAMS = 'UI_FD_ANALYSER_CHANGE_PARAMS';

// -------------------
// Actions
// -------------------

export const closeModalAction = () =>
  store.dispatch({ type: CLOSE_MODAL });

export const openModalAction = (modal, props) =>
  store.dispatch({
    type: OPEN_MODAL,
    modal,
    props,
  });

export const openMessageModalAction = ({ header, content, icon, color }) =>
  store.dispatch({
    type: OPEN_MESSAGE_MODAL,
    payload: {
      header,
      content,
      icon,
      color
    }
  });

export const uiFdAnalyserChangeParamsAction = (id, param, value) =>
  store.dispatch({
    type: UI_FD_ANALYSER_CHANGE_PARAMS,
    id,
    param,
    value,
  });

export const uiTdAnalyserChangeParamsAction = (id, param, value) =>
  store.dispatch({
    type: UI_TD_ANALYSER_CHANGE_PARAMS,
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
