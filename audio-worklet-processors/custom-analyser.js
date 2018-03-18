// ----------------------------
// AudioWorkletProcessor
// ----------------------------

/**
 * One idea would be to set parameters on this
 * by sending a message instead of supplying them
 * through parameters. That would probably be faster.
 */
class Processor extends AudioWorkletProcessor { // eslint-disable-line
  constructor() {
    super();
    // this.samplesToStore = 375;

    // this.createBuffer();

    /**
     * AudioWorkletNode asks for data.
     * This class responds by giving it data.
     */
    this.port.onmessage = () => {
      this.port.postMessage({ type: 'data', payload: this.buffer });
    };
  }

  static get parameterDescriptors() {
    return [
      { name: 'samplesToStore', defaultValue: 0 },
    ];
  }

  // createBuffer() {
  //   /**
  //    * Stores what is going to be sent to
  //    * the AudioWorkletNode.
  //    */
  //   /**
  //    * Ideally I should not recreate the whole buffer,
  //    * but I should shrink or expand it,
  //    * so that the current data is not lost
  //    * and also it is more efficient.
  //    */
  //   this.buffer = new Array(this.samplesToStore).fill(0);
  // }

  proc(input) {
    this.proc3(input);
  } 

  proc1(input) {
    /**
     * Must I copy the input or can I just assign it ??
     * slice vs subarray.
     */
    this.buffer = input.subarray(128 - this.samplesToStore);
  }

  // proc2count = 0
  proc2(input) {
    if (this.proc2count === 0) {
      this.proc2temp = [].concat(input.subarray(256 - this.samplesToStore));
      this.proc2count = 1;
    } else {
      // console.log('this.proc2temp: ', this.proc2temp);
      this.buffer = this.proc2temp.concat(...input);
      // console.log('this.buffer.length: ', this.buffer.length);
      this.proc2temp = undefined;
      this.proc2count = 0;
    }
  }

  proc3(input) {
    this.buffer.shift();
    this.buffer.push(input[127]);
  }

  recalculate() {
    if (this.samplesToStore <= 128) {
      this.buffer = new Array(this.samplesToStore).fill(0);
      this.proc = this.proc1;
    } else if (this.samplesToStore <= 256) {
      this.buffer = new Array(this.samplesToStore).fill(0);
      this.proc2count = 0;
      this.proc = this.proc2;
    } else {
      this.buffer = new Array(this.samplesToStore).fill(0);
      this.proc = this.proc3;
    }
  }

  /**
   * 128 samples
   * 48 000 samples/second
   * => 375 process(...) / second
   * => 2.666 ms / 1 process
   */
  process([[input]], [[output]], { samplesToStore }) {  // eslint-disable-line
    // console.log('samplesToStore[127]:', samplesToStore[127]);
    if (this.samplesToStore !== samplesToStore[127]) {
      this.samplesToStore = samplesToStore[127]; // eslint-disable-line
      this.recalculate();
    }
    this.proc(input);

    return true; // keep processor alive
  }
}

registerProcessor('custom-analyser', Processor); // eslint-disable-line
