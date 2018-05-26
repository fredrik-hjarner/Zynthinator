import * as R from 'ramda';

/**
 * (valToReplace, array, replaceWith) -> array
 */
export const replaceInArray = R.curry((valToReplace, array, replaceWith) =>
  R.map((el) => {
    if (el === valToReplace) {
      return replaceWith;
    }
    return el;
  }, array));

/**
 * tests if all the values in an array are
 * deep equal
 */
export const allDeepEqual = (array) => {
  // array should not be able to be empty or of size one
  if (!array || array.length < 2) {
    alert('Error: array is either nil or has length less than 2.');
    debugger;
  }
  const first = array[0];
  return R.all(R.equals(first), array);
};

/**
 * Returns a function from another
 * function that returns an array.
 * Memoizes.
 * If an array is value equal to memoized array
 * returns the memoized array
 * else returns input.
 * 
 * Cache depth/size is one.
 */
export const valEqArrayReturnsEqArray = (func) => {
  let memoizedArray;
  return (...args) => {
    const array = func(...args);
    if (R.equals(array, memoizedArray)) {
      return memoizedArray;
    }
    if (memoizedArray === undefined) {
      memoizedArray = array;
    }
    return array;
  };
};

/**
 * Checks if the value of a prop
 * (of an object) in the array.
 */
export const propInArray = (prop, array) => R.propSatisfies(
  R.contains(R.__, array),
  prop,
);

/**
 * a helper function to RH.evolvePaths.
 */
const _constructEvolveObject = R.compose(
  R.reduce(
    (accum, [key, value]) =>
      R.assocPath(R.split('.', key), value, accum),
    {},
  ),        
  R.toPairs,
);

/*
  evolvePaths(
    {
      'a.b.c': R.reject(R.equals(4)),
      'a.b.d': R.append(13),
    },
    state,
  );
*/
export const evolvePaths = (obj, state) => R.evolve(
  _constructEvolveObject(obj),
  state,
);
