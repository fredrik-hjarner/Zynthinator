import * as R from 'ramda';

export const deleteKnobReducer =
  (state, action) =>
    R.dissocPath(['nodeManagement', 'knobs', `${action.id}`], state);

export const deleteKnobReducer2 =
  R.flip(R.uncurryN(
    2,
    R.compose(
      R.dissocPath,
      R.append(R.__, ['nodeManagement', 'knobs']),
      R.toString,
      R.prop('id'),
    ),
  ));
