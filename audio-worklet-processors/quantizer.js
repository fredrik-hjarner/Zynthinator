// ----------------------------
// AudioWorkletProcessor
// ----------------------------

class Quantizer extends AudioWorkletProcessor { // eslint-disable-line
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
      const quanti = Math.round(value / size);
      output[index] = quanti * size; // eslint-disable-line
    });

    return true; // keep processor alive
  }
}

registerProcessor('quantizer', Quantizer); // eslint-disable-line
