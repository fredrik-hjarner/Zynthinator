// ----------------------------
// AudioWorkletProcessor
// ----------------------------

/**
 * Assumes inputArr size of 128.
 * nth must be at most 7 because 2^7 = 128.
 */
/**
 * I should replace this with a pushEveryNth.
 */
function pushEveryNth(pushTo, input, nth) {
  for (let i = 0; i < 128; i += nth) {
    pushTo.push(input[i]);
  }
}

/**
 * One idea would be to set parameters on this
 * by sending a message instead of supplying them
 * through parameters. That would probably be faster.
 */
class Processor extends AudioWorkletProcessor { // eslint-disable-line
  constructor() {
    super();
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
    if (this.exponent >= 7) {
      this.windowsToCapture = 2 ** (this.exponent - 7);
      /**
       * 2**9 = 512 which is the max that
       * I want to return in this.buffer.
       * First windowsToCapture windows are captured,
       * then every this.nth of the tempBuffer is returned :)
       */
      this.nth = Math.max(1, 2 ** (this.exponent - 9));
      this.windowsCaptured = 0;
      // this.tempBuffer = [];
      const bufferLength = (128 * this.windowsToCapture) / this.nth;
      this.buffer = new Array(bufferLength).fill(0);
    }

    if (this.exponent < 7) {
      this.windowsToCapture = null;
      /**
       * 2**9 = 512 which is the max that
       * I want to return in this.buffer.
       * First windowsToCapture windows are captured,
       * then every this.nth of the tempBuffer is returned :)
       */
      this.nth = null;
      this.windowsCaptured = null;
      // this.tempBuffer = null;
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
  process([[input]], [[output]], { exponent }) {  // eslint-disable-line
    let exp = exponent[127];
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
    if (this.exponent < 7) {
      const samplesToGrab = 2 ** this.exponent;
      // capture part of the first window
      this.buffer = input.subarray(128 - samplesToGrab);
    }
    
    if (this.exponent >= 7) {
      // remove a window then add a window.
      this.buffer.splice(0, 128 / this.nth);
      pushEveryNth(this.buffer, input, this.nth);
      this.windowsCaptured++;
      // if (this.windowsCaptured >= this.windowsToCapture) {
      //   // this.buffer = this.tempBuffer;
      //   // this.tempBuffer = [];
      //   this.windowsCaptured = 0;
      // }
    }

    return true; // keep processor alive
  }
}

registerProcessor('custom-analyser', Processor); // eslint-disable-line
