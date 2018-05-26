import * as R from 'ramda';
import { propInArray } from 'helpers/ramdaHelpers';

export const deleteTriggerReducer =
  (state, { payload: { ids } }) =>
    R.evolve(
      {
        nodeManagement: {
          triggers:
            R.reject(propInArray('id', ids)),
          triggeredTriggers:
            R.reject(R.contains(R.__, ids)),
        },
      },
      state,
    );
