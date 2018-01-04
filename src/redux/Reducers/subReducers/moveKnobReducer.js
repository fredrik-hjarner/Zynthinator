import * as R from 'ramda';

export const moveKnobReducer =
  (state, action) => {
    const {
      id,
      value,
    } = action;

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
