import * as R from 'ramda';

export const addToHistoryReducer =
  (state, action) =>
    R.evolve({
      history: R.append(action),
    }, state);
    
export const addToHistoryReducer2 =
  R.flip(R.compose(
    R.evolve,
    R.assoc('history', R.__, {}),
    R.append,
  ));
