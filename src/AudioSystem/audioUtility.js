class AudioUtility {
  /**
   * @param {*} frequencyFactor 1 means an unaltered frequency. 2 means doubled frequency.
   */
  frequencyFactorToCents =
    frequencyFactor => 1200 * Math.log2(frequencyFactor);

  /**
   * @param {*} loudness - loudness is how loud something is perceived
   *                       to be for a human. Gain is physical/electrical
   *                       amplitude.
   *                       Range = zero to one => zero to one
   */
  loudnessToGain =
    loudness =>
      10 ** (Math.log(loudness) / Math.log(2))
  gainToLoudness =
    gain =>
      0.5 ** (Math.log(gain) / Math.log(0.1))
}

export const audioUtility = new AudioUtility();
