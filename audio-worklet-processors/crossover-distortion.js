// ----------------------------
// AudioWorkletProcessor
// ----------------------------

class Processor extends AudioWorkletProcessor { // eslint-disable-line
  // constructor() {
  //   super();
  //   this.lastHigh = false; // just initialize it to some random value. doesn't matter.
  // }

  static get parameterDescriptors() {
    return [
      { name: 'threshold', defaultValue: 0 },
    ];
  }

  process([[input]], [[output]], { threshold }) {  // eslint-disable-line
    const deadie = threshold[0];
    input.forEach((value, index) => {
      output[index] = (value > deadie || value < -deadie) ? value : 0; // eslint-disable-line
    });

    return true; // keep processor alive
  }
}

registerProcessor('crossover-distortion', Processor); // eslint-disable-line
