import * as R from 'ramda';
import { ramdaHelpers as RH } from 'helpers';
import { createNodeReducer } from '../node/node';
import { createConnectionReducer } from '../connection/connection'; // eslint-disable-line

// -----------------------------
// CREATE_KNOB
// ------------------------------
export const createKnobReducer = (_state, action) => {
  /**
   * Create the Knob-node.
   * Then connect the Knob-node to whatever the
   * knob should be connected to.
   */
  const { type, ...params } = action;
  const { connectedToWhichNode, connectedToWhichParam, minValue, maxValue } = action; // eslint-disable-line

  const fakeAction = {
    nodeType: 'Knob',
    value: minValue // dunno
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
    ...params,
  };

  return R.evolve({
    nodeManagement: {
      highestKnobIdYet: () => knobId,
      knobs: R.assoc(`${knobId}`, knob),
    },
  }, newState);
};

// -----------------------------
// DELETE_KNOB
// ------------------------------
export const deleteKnobReducer = (state, { payload: { ids } }) =>
  RH.evolvePaths(
    { 'nodeManagement.knobs': R.reject(RH.propInArray('id', ids)) },
    state,
  );

// -----------------------------
// MOVE_KNOB
// ------------------------------
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
