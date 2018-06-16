import * as R from 'ramda';

export const addPreviousStateReducer = (state) => {
  const withoutHistory = R.omit(['history', 'previousState'], state);
  return R.assoc('previousState', withoutHistory, state);
};
