// ----------------------------
// AudioWorkletProcessor
// ----------------------------

class Processor extends AudioWorkletProcessor { // eslint-disable-line
  constructor() {
    super();
    this.lastHigh = false; // just initialize it to some random value. doesn't matter.
  }

  static get parameterDescriptors() {
    return [
      { name: 'threshold', defaultValue: 0 },
    ];
  }

  process([[input]], [[output]], { threshold }) {
    const deadie = threshold[0];
    input.forEach((value, index) => {
      if (this.lastHigh && value < 0.5 - deadie) {
        this.lastHigh = false;
      } else if (!this.lastHigh && value > 0.5 + deadie) {
        this.lastHigh = true;
      }
      output[index] = this.lastHigh ? 1 : 0; // eslint-disable-line
    });

    return true; // keep processor alive
  }
}

registerProcessor('schmitt-trigger', Processor); // eslint-disable-line
