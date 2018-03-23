import * as R from 'ramda';
import { audioContext } from './audioContext';
import { AudioWorkletBase } from './BaseClasses';

const processorPromise = audioContext.audioWorklet.addModule('./audio-worklet-processors/quantizer.js');

export class Quantizer extends AudioWorkletBase {
  constructor({ node }) {
    /**
     * todo I dont want to pick manually.
     * I want to pick automatically!
     */
    const defaultParams = R.pick([
      'quantumSize',
    ], node);

    /**
     * todo I dont want to pick manually.
     * I want to pick automatically!
     */
    const bufferNodeNames = [
      'quantumSize',
      'input',
      'output'
    ];

    super({
      id: node.id,
      defaultParams,
      bufferNodeNames
    });

    processorPromise.then(() => {
      // console.log('processorPromise.then()');
      this.worklet = new AudioWorkletNode(audioContext, 'quantizer'); // eslint-disable-line
      // console.log('worklet created');

      this.connectBufferNodesToWorklet();
      this.worklet.connect(audioContext.destination);
    });
  }
  
  /**
   * These getters
   * can all be automatically created.
   */
  get quantumSize() {
    return this.params.quantumSize;
  }
  get input() {
    return this.params.input;
  }
  get output() {
    return this.params.output;
  }
}
