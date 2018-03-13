class ChangeRangeProcessor extends AudioWorkletProcessor { // eslint-disable-line
  constructor() { // eslint-disable-line
    super();
  }

  static get parameterDescriptors() {
    return [
      { name: 'lowestInput', defaultValue: 0 },
      { name: 'highestInput', defaultValue: 0 },
      { name: 'lowestOutput', defaultValue: 0 },
      { name: 'highestOutput', defaultValue: 0 },
    ];
  }

  static calcGainAndOffset(lowestInput, highestInput, lowestOutput, highestOutput) {
    const inputRange = highestInput - lowestInput;
    const outputRange = highestOutput - lowestOutput;

    const gain = inputRange === 0 ?
      10 ** 15 : // todo. does this value make sense?
      outputRange / inputRange;

    const offset = gain === 0 ?
      0 : // todo. does this value make sense?
      (lowestOutput - (lowestInput * gain)) / gain;

    return { gain, offset };
  }

  process(inputs, outputs, parameters) { // eslint-disable-line

    outputs.fill(0.3);

    /**
     * output = (input + offset) * gain
     */

    return true; // keep processor alive
  }
}

registerProcessor('change-range', ChangeRangeProcessor); // eslint-disable-line
