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

    this.createBuffer();

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

  createBuffer() {
    /**
     * Stores what is going to be sent to
     * the AudioWorkletNode.
     */
    /**
     * Ideally I should not recreate the whole buffer,
     * but I should shrink or expand it,
     * so that the current data is not lost
     * and also it is more efficient.
     */
    this.buffer = new Array(this.samplesToStore).fill(0);
  }

  /**
   * 128 samples
   * 48 000 samples/second
   * => 375 process(...) / second
   * => 2.666 ms / 1 process
   */
  process([[input]], [[output]], { samplesToStore }) {  // eslint-disable-line
    if (this.samplesToStore !== samplesToStore[127]) {
      this.samplesToStore = samplesToStore[127]; // eslint-disable-line
      this.createBuffer();
    }
    this.buffer.shift();
    this.buffer.push(input[127]);

    return true; // keep processor alive
  }
}

registerProcessor('custom-analyser', Processor); // eslint-disable-line
