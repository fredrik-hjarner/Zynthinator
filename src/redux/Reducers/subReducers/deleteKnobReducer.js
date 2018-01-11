import * as R from 'ramda';
import {
  ramdaHelpers as RH,
} from '../../../helpers';

export const deleteKnobReducer =
  (state, { payload: { ids } }) =>
    RH.evolvePaths(
      { 'nodeManagement.knobs': R.reject(RH.propInArray('id', ids)) },
      state,
    );
