// ----------------------------
// AudioWorkletProcessor
// ----------------------------

/**
 * Assumes samplerate of 48000/s
 * -> 48/ms
 */
function millisToSamples(ms) {
  return Math.round(ms * 48);
}

class Processor extends AudioWorkletProcessor { // eslint-disable-line
  constructor() {
    super();
    this.quantaCountdown = 0;
    this.lastValue = 0; // the value that all in this time quantum gets.
  }

  static get parameterDescriptors() {
    return [
      { name: 'milliseconds', defaultValue: 0 },
    ];
  }

  process([[input]], [[output]], { milliseconds }) { // eslint-disable-line
    const quantumSizeInSamples = millisToSamples(milliseconds[127]);

    for (let i = 0; i < 128; i++) {
      if (this.quantaCountdown <= 0) {
        this.quantaCountdown = quantumSizeInSamples;
        this.lastValue = input[i];
      }
      output[i] = this.lastValue; // eslint-disable-line
      this.quantaCountdown--;
    }

    return true; // keep processor alive
  }
}

registerProcessor('time-quantizer', Processor); // eslint-disable-line
