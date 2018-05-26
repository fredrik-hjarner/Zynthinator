import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';
import * as R from 'ramda';
import { evolvePaths, propInArray } from 'helpers/ramdaHelpers';
import { createNodeReducer, deleteNodeReducer } from 'redux/Reducers/subReducers/node/node';
import { createConnectionReducer } from 'redux/Reducers/subReducers/connection/connection'; // eslint-disable-line
import { stateQueries } from 'redux/StateQueries';

// -------------------
// Actions
// -------------------

export const createKnobAction = ({ maxValue, minValue, name, step, func }) => {
  store.dispatch({
    type: actionTypes.CREATE_KNOB,
    payload: { maxValue, minValue, name, step, func },
  });
};

export const deleteKnobAction = (ids) => {
  store.dispatch({
    type: actionTypes.DELETE_KNOB,
    payload: {
      ids,
    },
  });
};

export const moveKnobAction = (id, value) => {
  store.dispatch({
    type: actionTypes.MOVE_KNOB,
    id,
    value,
  });
};

// --------------------------------
// Reducers
// --------------------------------

export const createKnobReducer = (_state, { payload: { maxValue, minValue, name, step, func } }) => {
  /**
   * Create the Knob-node.
   * Then connect the Knob-node to whatever the
   * knob should be connected to.
   */

  const fakeAction = {
    nodeType: 'Knob',
    value: minValue // setting minValue as default.
  };
  const newState = createNodeReducer(_state, fakeAction);
  // grab the id in the most ugly way possible. todo.
  const parentNodeId = newState.nodeManagement.highestNodeIdYet;

  const knobId = newState.nodeManagement.highestKnobIdYet + 1;

  const knob = {
    id: knobId,
    knobNodeId: parentNodeId,
    'function': func, // eslint-disable-line
    maxValue,
    minValue,
    name,
    step
  };

  return R.evolve({
    nodeManagement: {
      highestKnobIdYet: () => knobId,
      knobs: R.assoc(`${knobId}`, knob),
    },
  }, newState);
};

// -----------------------------
// todo. All that operate on many should
// have plural names => deleteKnobsReducer.
// ------------------------------
export const deleteKnobReducer = (state, { payload: { ids } }) => {
  /**
   * Should also delete the Knob node.
   */
  // Map the ids to knob objects
  const knobs = Object.values(stateQueries.getKnobsByIds(state, ids));
  const nodeIds = knobs.map(R.prop('knobNodeId'));
  const newState = deleteNodeReducer(state, { nodes: nodeIds });
  // then delete the knob objects.
  return evolvePaths(
    { 'nodeManagement.knobs': R.reject(propInArray('id', ids)) },
    newState,
  );
};

export const moveKnobReducer = (state, action) => {
  const { id, value } = action;

  const {
    // connectedToWhichNode,
    // connectedToWhichParam,
    knobNodeId
  } = state.nodeManagement.knobs[id];

  // find the connected node
  // change the connected param.

  return R.assocPath(
    [
      'nodeManagement',
      'nodes',
      `${knobNodeId}`,
      'value',
    ],
    value,
    state,
  );
};
