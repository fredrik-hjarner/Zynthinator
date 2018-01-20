import * as R from 'ramda';
import {
  ramdaHelpers as RH,
} from '../../../helpers';

export const deleteConnectionReducer =
  (state, { payload: { ids } }) =>
    RH.evolvePaths(
      { 'nodeManagement.connections': R.reject(RH.propInArray('id', ids)) },
      state,
    );

