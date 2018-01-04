import * as R from 'ramda';

export const createTriggerReducer =
  (state, action) => {
    const {
      type,
      ...params
    } = action;
    const triggerId =
      state.nodeManagement.highestTriggerIdYet + 1;

    const trigger = {
      id:
        triggerId,
      ...params,
    };

    return R.evolve({
      nodeManagement: {
        highestTriggerIdYet: () => triggerId,
        triggers: R.assoc(`${triggerId}`, trigger),
      },
    }, state);
  };
