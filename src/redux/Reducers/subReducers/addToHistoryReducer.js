import * as R from 'ramda';

export const addToHistoryReducer = (state, action) =>
  R.evolve({
    history: R.append(action),
  }, state);
