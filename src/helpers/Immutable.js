import * as R from 'ramda';

/**
 * a helper function to RH.evolvePaths.
 */
const constructEvolveObject =
  R.compose(
    R.reduce(
      (accum, [key, value]) =>
        R.assocPath(R.split('.', key), value, accum),
      {},
    ),        
    R.toPairs,
  );

export const Immutable = {
  /*

    evolvePaths(
      {
        'a.b.c': R.reject(R.equals(4)),
        'a.b.d': R.append(13),
      },
      state,
    );

  */
  evolvePaths:
    (obj, _state) =>
      R.evolve(
        constructEvolveObject(obj),
        _state,
      ),
};
