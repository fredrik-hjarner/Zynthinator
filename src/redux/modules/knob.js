import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';
import * as R from 'ramda';
import { ramdaHelpers as RH } from 'helpers';
import { createNodeReducer, deleteNodeReducer } from 'redux/Reducers/subReducers/node/node';
import { createConnectionReducer } from 'redux/Reducers/subReducers/connection/connection'; // eslint-disable-line
import { stateQueries } from 'redux/StateQueries';

// -------------------
// Actions
// -------------------

export const createKnobAction = (params) => {
  store.dispatch({
    type: actionTypes.CREATE_KNOB,
    ...params,
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

export const createKnobReducer = (_state, action) => {
  console.log('action:');
  console.dir(action);
  console.log('');
  /**
   * Create the Knob-node.
   * Then connect the Knob-node to whatever the
   * knob should be connected to.
   */
  const Function = action.function;
  const { connectedToWhichNode, connectedToWhichParam, maxValue, minValue, name, step } = action;

  // wtf is going on here?
  const fakeAction = {
    nodeType: 'Knob',
    value: minValue // dunno // what? is this a default value?
  };
  let newState = createNodeReducer(_state, fakeAction);
  // grab the id in the most ugly way possible. todo.
  const parentNodeId = newState.nodeManagement.highestNodeIdYet;

  // So now make the connection.
  const connAction = {
    parentNodeIds: [parentNodeId],
    childNodes: [{
      nodeId: connectedToWhichNode,
      input: connectedToWhichParam
    }]
  };
  newState = createConnectionReducer(newState, connAction);

  const knobId = newState.nodeManagement.highestKnobIdYet + 1;

  const knob = {
    id: knobId,
    knobNodeId: parentNodeId,
    connectedToWhichNode,
    connectedToWhichParam,
    'function': Function, // eslint-disable-line
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
  return RH.evolvePaths(
    { 'nodeManagement.knobs': R.reject(RH.propInArray('id', ids)) },
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
