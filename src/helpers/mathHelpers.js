class MathHelpers {
  /**
   * convert from one range to another.
   * both ranges must have 0 as lowest value.
   */
  changeScale =
    (oldMax, newMax, val) => {
      if (oldMax === 0) {
        alert('divide by zero');
        debugger;
      }
      const factor = val / oldMax; // todo screws up if oldMax === 0.
      return factor * newMax;
    }

  /**
   * Only works for zero to one scale
   */
  linearToExponential =
    value =>
      10 ** (Math.log(value) / Math.log(2))

  /**
   * Only works for zero to one scale
   */
  linearToLogarithmic =
    value =>
      0.5 ** (Math.log(value) / Math.log(0.1))

  /**
   * Works for any scale.
   */
  linearToExponentialAnyScale =
    (minValue, maxValue, value) => {
      // convert to range zero to one
      const scaledValue =
        this.changeScale(maxValue - minValue, 1, value - minValue);

      // convert
      const exp =
        this.linearToExponential(scaledValue);

      // convert scale back to zero to maxValue
      return this.changeScale(1, maxValue - minValue, exp) + minValue;
    }

  /**
   * Works for any scale.
   */
  linearToLogarithmicAnyScale =
    (minValue, maxValue, value) => {
      // convert to range zero to one
      const scaledValue =
        this.changeScale(maxValue - minValue, 1, value - minValue);

      // convert
      const exp =
        this.linearToLogarithmic(scaledValue);

      // convert scale back to zero to maxValue
      return this.changeScale(1, maxValue - minValue, exp) + minValue;
    }

  /**
   * convertRange( 328.17, [ 300.77, 559.22 ], [ 1, 10 ] );
   * >>> 1.9541497388276272
   */
  convertRange =
    (value, r1, r2) => {
      if (r1[1] - r1[0] === 0) {
        return 10 ** 15;
      }
      return ((value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0])) + r2[0];
    }
}

export const mathHelpers = new MathHelpers();
