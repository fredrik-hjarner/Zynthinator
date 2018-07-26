class AudioUtility {
	/**
	 * @param {*} frequencyFactor 1 means an unaltered frequency. 2 means doubled frequency.
	 */
	public frequencyFactorToCents = (frequencyFactor: number) => 1200 * Math.log2(frequencyFactor);

	/**
	 * @param {*} loudness - loudness is how loud something is perceived
	 *                       to be for a human. Gain is physical/electrical
	 *                       amplitude.
	 *                       Range = zero to one => zero to one
	 */
	public loudnessToGain =	(loudness: number) => 10 ** (Math.log(loudness) / Math.log(2));
	public gainToLoudness = (gain: number) => 0.5 ** (Math.log(gain) / Math.log(0.1));
}

export const audioUtility = new AudioUtility();
