import * as R from 'ramda';

/**
 * convertRange( 328.17, [ 300.77, 559.22 ], [ 1, 10 ] );
 * >>> 1.9541497388276272
 * @param r1 Input range
 * @param r2 Output range
 * @param value Value in input range
 * 
 * @returns Value in output range
 */
export const convertRange = R.curry((r1, r2, value) => {
  if (r1[1] - r1[0] === 0) {
    return 10 ** 15;
  }
  return ((value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0])) + r2[0];
});

/**
 * Only works for zero to one scale
 */
const _linearToExponential = value => 10 ** (Math.log(value) / Math.log(2));

/**
 * Only works for zero to one scale
 */
const _linearToLogarithmic = value => 0.5 ** (Math.log(value) / Math.log(0.1));

/**
 * Works for any scale.
 */
export const linearToExponential = (minValue, maxValue, value) => R.compose(
  convertRange([0, 1], [minValue, maxValue]),
  _linearToExponential,
  convertRange([minValue, maxValue], [0, 1]),
)(value);

/**
 * Works for any scale.
 */
export const linearToLogarithmic = (minValue, maxValue, value) => R.compose(
  convertRange([0, 1], [minValue, maxValue]),
  _linearToLogarithmic,
  convertRange([minValue, maxValue], [0, 1]),
)(value);
