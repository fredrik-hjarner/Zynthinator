// ----------------------------
// AudioWorkletProcessor
// ----------------------------

/**
 * 
 */
function pushEveryNth(pushTo, input, nth) {
  for (let i = 0; i < input.length; i += nth) {
    pushTo.push(input[i]);
  }
}

const BITS_PER_WINDOW = 8;
const SAMPLES_PER_WINDOW = 2 ** BITS_PER_WINDOW;

/**
 * For example 9 means that we send 512 samples to the client/node.
 * By changing this value I can change the resolution,
 * so to speak.
 */
const MAX_BITS_TO_STORE = 9;
// const MAX_SAMPLES_TO_STORE = 2 ** MAX_BITS_TO_STORE;

/**
 * One idea would be to set parameters on this
 * by sending a message instead of supplying them
 * through parameters. That would probably be faster.
 */
class Processor extends AudioWorkletProcessor { // eslint-disable-line
  constructor() {
    super();
    this.input256 = [];
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
      { name: 'exponent', defaultValue: 0 },
    ];
  }

  recalculate() {
    /**
     * 2**7 = 128
     * That is we need to capture
     * 1 or more whole process-buffer-windows.
     */
    if (this.exponent >= BITS_PER_WINDOW) {
      this.windowsToCapture = 2 ** (this.exponent - BITS_PER_WINDOW);
      /**
       * 2**9 = 512 which is the max that
       * I want to return in this.buffer.
       * First windowsToCapture windows are captured,
       * then every this.nth of the tempBuffer is returned :)
       */
      this.nth = Math.max(1, 2 ** (this.exponent - MAX_BITS_TO_STORE));
      const bufferLength = (SAMPLES_PER_WINDOW * this.windowsToCapture) / this.nth;
      this.buffer = new Array(bufferLength).fill(0);
    }

    if (this.exponent < BITS_PER_WINDOW) {
      this.windowsToCapture = null;
      /**
       * 2**9 = 512 which is the max that
       * I want to return in this.buffer.
       * First windowsToCapture windows are captured,
       * then every this.nth of the tempBuffer is returned :)
       */
      this.nth = null;
    }

    console.log('this.exponent: ', this.exponent);
    console.log('this.windowsToCapture: ', this.windowsToCapture);
    console.log('this.nth: ', this.nth);
  }

  /**
   * 128 samples
   * 48 000 samples/second
   * => 375 process(...) / second
   * => 2.666 ms / 1 process
   */
  process([[input]], _, { exponent }) {
    this.input256.splice(-1, 0, ...input);
    if (this.input256.length === SAMPLES_PER_WINDOW) {
      // Copying with this.input256.slice() would be more secure.
      this.process256(this.input256, exponent[127]);
      this.input256 = [];
    }
    return true; // keep processor alive
  }

  /**
   * Like process
   * but has input buffer of 256 samples.
   */
  process256(input, exponent) {
    let exp = exponent;
    /**
     * cap value.
     * 2**17 ~= 3 seconds
     */
    if (exp > 17) {
      exp = 17;
    }
    if (this.exponent !== exp) {
      this.exponent = exp; // eslint-disable-line
      this.recalculate();
    }

    // Do the processing
    if (this.exponent < BITS_PER_WINDOW) {
      // capture part of the first window
      const samplesToGrab = 2 ** this.exponent;
      const samplesToRemove = SAMPLES_PER_WINDOW - samplesToGrab;
      this.buffer = input.slice(samplesToRemove);
    }
    
    if (this.exponent >= BITS_PER_WINDOW) {
      // remove a window then add a window.
      this.buffer.splice(0, SAMPLES_PER_WINDOW / this.nth);
      pushEveryNth(this.buffer, input, this.nth);
    }
  }
}

registerProcessor('custom-analyser', Processor); // eslint-disable-line
