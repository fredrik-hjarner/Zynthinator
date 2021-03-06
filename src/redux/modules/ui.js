import * as R from 'ramda';
import { store } from 'redux/Store';
import { createNodeReducer } from 'redux/modules/node';
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

export const createTimeDomainAnalyserReducer = (state, action) => {
  /**
   * First add the node 'normally'.
   */
  let newState = createNodeReducer(state, action);

  /**
   * If the component was just updated and not created
   * then don't create another UI component.
   */
  if (action.id) {
    return newState;
  }

  /**
   * Then add the UI state stuff.
   */
  const nodeId = newState.nodeManagement.highestNodeIdYet;

  const componentId = newState.ui.highestIdYet + 1;

  // update id counter.
  newState =
    R.assocPath(
      ['ui', 'highestIdYet'],
      componentId,
      newState,
    );

  /**
   * Add the UI component
   */
  return R.assocPath(
    ['ui', 'components', `${componentId}`],
    {
      id: componentId,
      type: 'TimeDomainAnalyser',
      nodeId,
      millisecondsBetweenUpdates: 40, // default value
      maxValue: 1, // default value
      minValue: -1, // default value
      canvasWidth: 350, // default value
      canvasHeight: 80, // default value
      bitsToRecord: 11, // default value 2 ** 11
    },
    newState,
  );
};  

export const createFrequencyDomainAnalyserReducer = (state, action) => {
  /**
   * First add the node 'normally'.
   */
  let newState = createNodeReducer(state, action);

  /**
   * If the component was just updated and not created
   * then don't create another UI component.
   */
  if (action.id) {
    return newState;
  }

  /**
   * Then add the UI state stuff.
   */
  const nodeId = newState.nodeManagement.highestNodeIdYet;

  const componentId = newState.ui.highestIdYet + 1;

  // update id counter.
  newState =
    R.assocPath(
      ['ui', 'highestIdYet'],
      componentId,
      newState,
    );

  /**
   * Add the UI component
   */
  return R.assocPath(
    ['ui', 'components', `${componentId}`],
    {
      id: componentId,
      type: 'FrequencyDomainAnalyser',
      nodeId,
      millisecondsBetweenUpdates: 40, // default value
      // maxValue: 1, // default value
      // minValue: -1, // default value
      canvasWidth: 350, // default value
      canvasHeight: 80, // default value
      fftSize: 12, // default == 2**11
      maxDecibels: -30, // default == -30
      minDecibels: -100, // default == -100
      smoothingTimeConstant: 0, // default is 0.8
    },
    newState,
  );
};  

export const createCustomAnalyserReducer = (state, action) => {
  /**
   * First add the node 'normally'.
   */
  let newState = createNodeReducer(state, action);

  /**
   * If the component was just updated and not created
   * then don't create another UI component.
   */
  if (action.id) {
    return newState;
  }

  /**
   * Then add the UI state stuff.
   */
  const nodeId = newState.nodeManagement.highestNodeIdYet;

  const componentId = newState.ui.highestIdYet + 1;

  // update id counter.
  newState = R.assocPath(
    ['ui', 'highestIdYet'],
    componentId,
    newState,
  );

  /**
   * Add the UI component
   */
  return R.assocPath(
    ['ui', 'components', `${componentId}`],
    {
      id: componentId,
      type: 'CustomAnalyser',
      nodeId,
      millisecondsBetweenUpdates: 40, // default value
      maxValue: 1, // default value
      minValue: -1, // default value
      canvasWidth: 350, // default value
      canvasHeight: 80, // default value
      bitsToRecord: 11, // default value 2 ** 11
    },
    newState,
  );
};
