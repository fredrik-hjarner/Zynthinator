import * as R from 'ramda';

export const triggerHandledReducer =
  (state, action) => {
    const {
      id,
    } = action;

    return R.evolve(
      {
        nodeManagement: {
          triggeredTriggers:
            R.reject(R.equals(id)),
        },
      },
      state,
    );
  };
