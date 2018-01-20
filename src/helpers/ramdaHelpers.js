import * as R from 'ramda';
import _ from 'lodash'; // eslint-disable-line

class RamdaHelpers {
  /**
   * (valToReplace, array, replaceWith) -> array
   */
  replaceInArray =
    R.curry((valToReplace, array, replaceWith) =>
      R.map((el) => {
        if (el === valToReplace) {
          return replaceWith;
        }
        return el;
      }, array))

  evolveArray =
    () => {
      //
    }
  
  assocEmpty = // eslint-disable-line
    R.assoc(R.__, R.__, {})
  
  objFromArgs =
    R.uncurryN(
      2,
      keysArray =>
        (...args) =>
          R.zipObj(keysArray, args),
    )
  
  objCopyProp = // todo. what is this?
    (from, to) => // eslint-disable-line
      R.chain(
        R.assoc('knob'),
        R.converge(
          R.merge,
          [
            R.pick('nodeId'),
            R.prop('knob'),
          ],
        ),
      )

  /**
   * tests if all the values in an array are
   * deep equal
   */
  allDeepEqual =
    (array) => {
      // array should not be able to be empty or of size one
      if (!array || array.length < 2) {
        alert('Error: array is either nil or has length less than 2.');
        debugger;
      }
      const first = array[0];
      return R.all(R.equals(first), array);
    }

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
  valEqArrayReturnsEqArray =
    (func) => {
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
    }

  /**
   * Checks if the value of a prop
   * (of an object) in the array.
   */
  propInArray =
    (prop, array) => 
      R.propSatisfies(
        R.contains(R.__, array),
        prop,
      )

  /**
   * a helper function to RH.evolvePaths.
   */
  _constructEvolveObject =
    R.compose(
      R.reduce(
        (accum, [key, value]) =>
          R.assocPath(R.split('.', key), value, accum),
        {},
      ),        
      R.toPairs,
    )

  /*
    evolvePaths(
      {
        'a.b.c': R.reject(R.equals(4)),
        'a.b.d': R.append(13),
      },
      state,
    );
  */
  evolvePaths =
    (obj, state) =>
      R.evolve(
        this._constructEvolveObject(obj),
        state,
      )
}

export const ramdaHelpers = new RamdaHelpers();
