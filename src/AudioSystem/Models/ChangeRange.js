import * as R from 'ramda';
import { audioContext } from './audioContext';
import { AudioWorkletBase } from './BaseClasses';

const processorPromise = audioContext.audioWorklet.addModule('./audio-worklet-processors/change-range.js');

export class ChangeRange extends AudioWorkletBase {
  constructor({ node }) {
    /**
     * todo I dont want to pick manually.
     * I want to pick automatically!
     */
    const defaultParams = R.pick([
      'lowestInput',
      'highestInput',
      'lowestOutput',
      'highestOutput'
    ], node);

    /**
     * todo I dont want to pick manually.
     * I want to pick automatically!
     */
    const bufferNodeNames = [
      'input',
      'output',
      'lowestInput',
      'highestInput',
      'lowestOutput',
      'highestOutput'
    ];

    super({
      id: node.id,
      defaultParams,
      bufferNodeNames
    });

    processorPromise.then(() => {
      this.worklet = new AudioWorkletNode(audioContext, 'change-range'); // eslint-disable-line

      this.worklet.port.onmessage = (event) => {
        console.log(event.data);
      };

      this.connectBufferNodesToWorklet();
    });
  }

  /**
   * These getters
   * can all be automatically created.
   */
  get output() {
    return this.params.output;
  }
  get input() {
    return this.params.input;
  }
  get lowestOutput() {
    return this.params.lowestOutput;
  }
  get highestOutput() {
    return this.params.highestOutput;
  }
}
