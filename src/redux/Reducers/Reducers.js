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
/* import {
  reduxHistory,
} from '../ReduxHistory'; */

/**
 * string -> string
 * CLICK_TRIGGER -> clickTriggerReducer
 */
const actionConstToReducer =
  actionConst =>
    _.camelCase(`${actionConst}Reducer`);

/**
 * Does some checks to see if the state is consistent.
 */
const checkStateConstistency =
  (state) => {
    const connections =
      stateQueries.getAllConnectionValues(state);
    /**
     * All connections should have an 'id' prop.
     */
    if (!R.all(R.has('id'), connections)) {
      debugger;
      alert('Error: connections is not consistent!');
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
