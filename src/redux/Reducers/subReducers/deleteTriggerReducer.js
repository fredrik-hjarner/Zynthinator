import * as R from 'ramda';

export const deleteTriggerReducer =
  (state, action) =>
    R.evolve(
      {
        nodeManagement: {
          triggers:
            R.omit(R.toString(action.id)),
          triggeredTriggers:
            R.without([action.id]),
        },
      },
      state,
    );
