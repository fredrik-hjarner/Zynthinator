import * as R from 'ramda';

export const type = {
  ARROW: 'arrow',
  NOTHING: 'no-arrow',
};

/**
 * Returns an array of objects
 *  {
 *    value: x,
 *    nextValue: y
 *  }
 * 
 * @param arr An array of values.
 */
const lookAhead = (arr) => {
  // debugger;
  if (arr.length === 1) {
    return [{ value: arr[0], nextValue: null }];
  }

  const arrWithNull = R.append(null, arr);

  // use R.aperture here instead.
  console.log(`beforeAperture: ${JSON.stringify(arrWithNull)}`);
  const aperture = R.aperture(2, arrWithNull);
  console.log(`afterAperture: ${JSON.stringify(aperture)}`);

  const objs = aperture.map(a => ({ value: a[0], nextValue: a[1] }));
  console.log(`afterMap: ${JSON.stringify(objs)}`);

  return objs;
};

/**
 * Calculates where arrows are going to be
 * and not be.
 * 
 * @param {*} chains 
 */
export const formatChains =
  (chains) => {
    /**
     * Add the arrows. 
     * 
     * @param chains [
     *    [1, 2, 3],
     *    [4, 5, 6],
     *    ...
     * ]
     * 
     * @returns ~[
     *    [{1,2}, {2,3}, {3,null}],
     *    [{4,5}, {5,6}, {6,null}],
     *    ...
     * ]
     */
    const chainsWithNext = chains.map(lookAhead);

    /**
     * Finally add the arrows.
     */
    const chainsWithArrows =
      chainsWithNext
        .map(R.chain((obj) => { // chain for arrays works as flatMap!
          if (obj.nextValue === null) {
            return [obj.value, type.NOTHING];
          }
          return [obj.value, type.ARROW];
        }));
    
    return chainsWithArrows;
  };
