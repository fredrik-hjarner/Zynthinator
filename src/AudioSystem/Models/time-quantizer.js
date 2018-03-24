import * as R from 'ramda';
import { audioContext } from './audioContext';
import { AudioWorkletBase } from './BaseClasses';

const processorPromise = audioContext.audioWorklet.addModule('./audio-worklet-processors/time-quantizer.js');

export class TimeQuantizer extends AudioWorkletBase {
  constructor({ node }) {
    /**
     * todo I dont want to pick manually.
     * I want to pick automatically!
     */
    const defaultParams = R.pick([
      'milliseconds',
    ], node);

    /**
     * todo I dont want to pick manually.
     * I want to pick automatically!
     */
    const bufferNodeNames = [
      'milliseconds',
      'input',
      'output'
    ];

    super({
      id: node.id,
      defaultParams,
      bufferNodeNames
    });

    processorPromise.then(() => {
      this.worklet = new AudioWorkletNode(audioContext, 'time-quantizer'); // eslint-disable-line
      this.connectBufferNodesToWorklet();
    });
  }
  
  /**
   * These getters
   * can all be automatically created.
   */
  get milliseconds() {
    return this.params.milliseconds;
  }
  get input() {
    return this.params.input;
  }
  get output() {
    return this.params.output;
  }
}
