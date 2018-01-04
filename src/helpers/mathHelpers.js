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
}

export const mathHelpers = new MathHelpers();
