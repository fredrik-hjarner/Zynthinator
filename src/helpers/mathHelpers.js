import * as R from 'ramda';

class MathHelpers {
  /**
   * Only works for zero to one scale
   */
  _linearToExponential =
    value =>
      10 ** (Math.log(value) / Math.log(2))

  /**
   * Only works for zero to one scale
   */
  _linearToLogarithmic =
    value =>
      0.5 ** (Math.log(value) / Math.log(0.1))

  /**
   * Works for any scale.
   */
  linearToExponential =
    (minValue, maxValue, value) =>
      R.compose(
        this.convertRange([0, 1], [minValue, maxValue]),
        this._linearToExponential,
        this.convertRange([minValue, maxValue], [0, 1]),
      )(value)

  /**
   * Works for any scale.
   */
  linearToLogarithmic =
    (minValue, maxValue, value) =>
      R.compose(
        this.convertRange([0, 1], [minValue, maxValue]),
        this._linearToLogarithmic,
        this.convertRange([minValue, maxValue], [0, 1]),
      )(value)

  /**
   * convertRange( 328.17, [ 300.77, 559.22 ], [ 1, 10 ] );
   * >>> 1.9541497388276272
   * @param r1 Input range
   * @param r2 Output range
   * @param value Value in input range
   * 
   * @returns Value in output range
   */
  convertRange =
    R.curry((r1, r2, value) => {
      if (r1[1] - r1[0] === 0) {
        return 10 ** 15;
      }
      return ((value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0])) + r2[0];
    })
}

export const mathHelpers = new MathHelpers();
