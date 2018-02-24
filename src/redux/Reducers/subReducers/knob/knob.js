import * as R from 'ramda';
import { ramdaHelpers as RH } from 'helpers';

export const createKnobReducer = (state, action) => {
  const { type, ...params } = action;
  const knobId = state.nodeManagement.highestKnobIdYet + 1;

  const knob = {
    id: knobId,
    ...params,
  };

  return R.evolve({
    nodeManagement: {
      highestKnobIdYet: () => knobId,
      knobs: R.assoc(`${knobId}`, knob),
    },
  }, state);
};
  
export const deleteKnobReducer = (state, { payload: { ids } }) =>
  RH.evolvePaths(
    { 'nodeManagement.knobs': R.reject(RH.propInArray('id', ids)) },
    state,
  );

export const moveKnobReducer = (state, action) => {
  const { id, value } = action;

  const {
    connectedToWhichNode,
    connectedToWhichParam,
  } = state.nodeManagement.knobs[id];

  // find the connected node
  // change the connected param.

  return R.assocPath(
    [
      'nodeManagement',
      'nodes',
      connectedToWhichNode,
      connectedToWhichParam,
    ],
    value,
    state,
  );
};
