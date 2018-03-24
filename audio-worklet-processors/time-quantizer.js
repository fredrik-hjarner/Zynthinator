// ----------------------------
// AudioWorkletProcessor
// ----------------------------

class Processor extends AudioWorkletProcessor { // eslint-disable-line
  static get parameterDescriptors() {
    return [
      { name: 'quantumSize', defaultValue: 0 },
    ];
  }

  process([[input]], [[output]], { quantumSize }) { // eslint-disable-line
    const size = quantumSize[127];
    if (size === 0) {
      input.forEach((value, index) => {
        output[index] = value; // eslint-disable-line
      });

      return true; // keep processor alive
    }

    input.forEach((value, index) => {
      const quanti = (value / size) | 0; // eslint-disable-line
      output[index] = quanti * size; // eslint-disable-line
    });

    return true; // keep processor alive
  }
}

registerProcessor('time-quantizer', Processor); // eslint-disable-line
