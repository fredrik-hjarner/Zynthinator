// ----------------------------
// AudioWorkletProcessor
// ----------------------------

class Processor extends AudioWorkletProcessor { // eslint-disable-line
  static get parameterDescriptors() {
    return [
      { name: 'lowestInput', defaultValue: 0 },
      { name: 'highestInput', defaultValue: 0 },
      { name: 'lowestOutput', defaultValue: 0 },
      { name: 'highestOutput', defaultValue: 0 },
    ];
  }

  calcGainAndOffset({ lowestInput, highestInput, lowestOutput, highestOutput }, index) {  // eslint-disable-line
    const inputRange = highestInput[index] - lowestInput[index];
    const outputRange = highestOutput[index] - lowestOutput[index];
  
    const gain = inputRange === 0 ?
      10 ** 15 : // todo. does this value make sense?
      outputRange / inputRange;
  
    const offset = gain === 0 ?
      0 : // todo. does this value make sense?
      (lowestOutput[index] - (lowestInput[index] * gain)) / gain;
  
    return { gain, offset };
  }

  process([[input]], [[output]], params) { // eslint-disable-line
    input.forEach((val, i) => {
      const { gain, offset } = this.calcGainAndOffset(params, i);
      output[i] = (val + offset) * gain; // eslint-disable-line
    });

    return true; // keep processor alive
  }
}

registerProcessor('change-range', Processor); // eslint-disable-line
