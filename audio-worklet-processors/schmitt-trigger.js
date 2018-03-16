// ----------------------------
// AudioWorkletProcessor
// ----------------------------

class Processor extends AudioWorkletProcessor { // eslint-disable-line
  // constructor() {
  //   super();
  // }

  process([[input]], [[output]], _) { // eslint-disable-line
    input.forEach((value, index) => {
      if (value > 0.5) {
        output[index] = 1; // eslint-disable-line
      } else {
        output[index] = 0; // eslint-disable-line
      }
    });

    return true; // keep processor alive
  }
}

registerProcessor('schmitt-trigger', Processor); // eslint-disable-line
