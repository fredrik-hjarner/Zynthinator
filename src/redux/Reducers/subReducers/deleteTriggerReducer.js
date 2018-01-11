import * as R from 'ramda';
import {
  ramdaHelpers as RH,
} from '../../../helpers';

export const deleteTriggerReducer =
  (state, { payload: { ids } }) =>
    R.evolve(
      {
        nodeManagement: {
          triggers:
            R.reject(RH.propInArray('id', ids)),
          triggeredTriggers:
            R.reject(R.contains(R.__, ids)),
        },
      },
      state,
    );
