import * as R from 'ramda';
import { audioContext } from 'AudioSystem/Models/audioContext';
import { AudioWorkletBase } from 'AudioSystem/Models/BaseClasses';
import { bypass } from 'AudioSystem/Models/decorators';

const processorPromise = audioContext.audioWorklet.addModule('./audio-worklet-processors/time-quantizer.js');

@bypass
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
