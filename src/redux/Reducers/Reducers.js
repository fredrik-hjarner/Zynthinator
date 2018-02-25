import _ from 'lodash';
import * as R from 'ramda';
import deepFreeze from 'deep-freeze';
import {
  routerReducer,
} from 'react-router-redux';
import { initialState } from '../InitialState';
import * as Reducers from './subReducers';
import {
  stateQueries,
} from '../StateQueries';

/**
 * string -> string
 * CLICK_TRIGGER -> clickTriggerReducer
 */
const actionConstToReducer =
  actionConst =>
    _.camelCase(`${actionConst}Reducer`);

const isFuckedUp =
  x =>
    x === undefined || x === null || x === Infinity || x === -Infinity;

/**
 * Does some checks to see if the state is consistent.
 */
const checkStateConstistency =
  (state) => { // todo, should receive latest action so that I can see what action caused it.
    // -------------------------------
    // Connections
    // -------------------------------

    const connections =
      stateQueries.getAllConnectionValues(state);
    /**
     * All connections should have an 'id' prop.
     */
    if (!R.all(R.has('id'), connections)) {
      debugger;
      alert('Error: connections is not consistent!');
    }

    // -------------------------------
    // Highest id values
    // -------------------------------

    const highestUiIdYet = state.ui.highestIdYet;
    if (isFuckedUp(highestUiIdYet)) {
      debugger;
      alert('Error! highestUiIdYet is fucked up.');
    }
    const { highestNodeIdYet } = state.nodeManagement;
    if (isFuckedUp(highestNodeIdYet)) {
      debugger;
      alert('Error! highestNodeIdYet is fucked up.');
    }

    // ----------------------------
    // Node id:s are numbers
    // ----------------------------

    const nodeKeys = Object.keys(state.nodeManagement.nodes);
    const nodeKeysAreConsistent = nodeKeys.every(key =>
      !isFuckedUp(key));
    if (!nodeKeysAreConsistent) {
      debugger;
      alert('Error! Node keys are not consistent.');
    }
  };

const _rootReducer =
  (_state, action) => {
    const state = {
      ..._state,
      router:
        routerReducer(_state.router, action),
    };
    const {
      type,
    } = action;

    if (type.startsWith('@@')) {
      return state;
    }
    
    /**
     * Specifically handle Analysers, because
     * some state.ui need to also be added.
     */
    if (type === 'CREATE_NODE' && action.nodeType === 'TimeDomainAnalyser') {
      return Reducers.createTimeDomainAnalyserReducer(state, action);
    }
    if (type === 'CREATE_NODE' && action.nodeType === 'FrequencyDomainAnalyser') {
      return Reducers.createFrequencyDomainAnalyserReducer(state, action);
    }

    const reducerName = actionConstToReducer(type);

    try {
      return Reducers[reducerName](state, action);
    } catch (exception) {
      alert(`action.type=${type}. Error with/in reducer with name '${reducerName}'.`);
      console.log(exception);
      debugger;
      return state;
    }
  };

/**
 * Throw exception when trying to access a key that does not exist!
 */
const handler = {
  get(target, key) {
    /* if (typeof key !== 'string') {
      debugger;
    } */
    if (
      key in target
      || key === '_reactFragment'
      || key === 'toJSON'
      || typeof key !== 'string'
      || key.startsWith('@@')
    ) {
      return target[key];
    }
    debugger;
    throw `Exception: '${key}' property does not exist in state.`;
  },
};

export const rootReducer =
  (_state = initialState, action) => {
    let state = Reducers.addToHistoryReducer(_state, action);
    state = Reducers.addPreviousStateReducer(state);
    // reduxHistory.addActionToHistory(action);
    state =
      _rootReducer(state, action);

    checkStateConstistency(state);

    deepFreeze(state);
    state = new Proxy(state, handler);
    return state;
  };
