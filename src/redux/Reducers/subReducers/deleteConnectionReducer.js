import * as R from 'ramda';

export const deleteConnectionReducer =
  (state, action) =>
    R.dissocPath(['nodeManagement', 'connections', `${action.connectionId}`], state);

export const deleteConnectionReducer2 =
  R.flip(R.uncurryN(
    2,
    R.compose(
      R.dissocPath,
      R.append(R.__, ['nodeManagement', 'connections']), // todo looks like shit
      R.toString,
      R.prop('connectionId'),
    ),
  ));
  
