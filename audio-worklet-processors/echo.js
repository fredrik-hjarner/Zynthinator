let n = 1;

const logNthTime = nth => message => {
  if (n === nth) {
    console.log(message);
    n = 1;
    return;
  }
  n++;
};

const log = logNthTime(1000);

// ----------------------------
// AudioWorkletProcessor
// ----------------------------

class Processor extends AudioWorkletProcessor { // eslint-disable-line
  constructor() {
    super();
    this.lastFrame = new Array(128).fill(0);
  }

  static get parameterDescriptors() {
    return [
      { name: 'milliseconds', defaultValue: 0 },
    ];
  }
  /* eslint-disable */
  process([[input]], [[output]], { milliseconds }) {  // eslint-disable-line
    const ms = milliseconds[0];

    // 0 ms echo is not possible so just return the input.
    // if (ms <= 0) {
    //   input.forEach((value, index) => {
    //     output[index] = value; // eslint-disable-line
    //   });
    //   // output = input; // doing this does not work :'(
    //   return true; // keep processor alive
    // }

    // const thisFrame = input;
    const combinedFrames = [].concat(this.lastFrame).concat(...input);
    log(
      `input.length: ${input.length}${'\n'}` +
      `this.lastFrame.length: ${this.lastFrame.length}${'\n'}` +
      `combinedFrames.length: ${combinedFrames.length}`
    );

    input.forEach((value, index) => {
      output[index] = value + combinedFrames[index + 128 - ms]; // eslint-disable-line
    });

    // update this.lastFrame
    input.forEach((value, index) => {
      this.lastFrame[index] = value; // eslint-disable-line
    });

    return true; // keep processor alive
  }
}

registerProcessor('echo', Processor); // eslint-disable-line
