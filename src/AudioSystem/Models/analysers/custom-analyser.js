import * as R from 'ramda';
import { audioContext } from 'AudioSystem/Models/audioContext';
import { AudioWorkletBase } from 'AudioSystem/Models/BaseClasses';

const processorPromise = audioContext.audioWorklet.addModule('./audio-worklet-processors/custom-analyser.js');

export class CustomAnalyser extends AudioWorkletBase {
  constructor({ node }) {
    /**
     * todo I dont want to pick manually.
     * I want to pick automatically!
     */
    const defaultParams = R.pick([
      'exponent',
      'trigger'
    ], node);

    /**
     * todo I dont want to pick manually.
     * I want to pick automatically!
     */
    const bufferNodeNames = [
      'exponent',
      'trigger',
      'input'
    ];

    super({
      id: node.id,
      defaultParams,
      bufferNodeNames
    });

    // Return all zeros if WorkletProcessor has not loaded.
    this.requestDataPromise = () => new Promise(r => r(new Array(375).fill(0)));
    this.onData = () => {};

    processorPromise.then(() => {
      // console.log('processorPromise.then()');
      this.worklet = new AudioWorkletNode(audioContext, 'custom-analyser'); // eslint-disable-line
      // console.log('worklet created');

      this.worklet.port.onmessage = ({ data: { type, payload } }) => {
        switch (type) {
          case 'data':
            this.onData(payload);
            break;
          default:
        }
      };

      /**
       * Get data by doing requestDataPromise().then((data) => { ... });
       */
      this.requestDataPromise = () => new Promise((resolve) => {
        // signals that we want data now.
        this.worklet.port.postMessage('');
        // Receives an array of size node.exponent.
        this.onData = resolve;
      });

      this.connectBufferNodesToWorklet();
      /**
       * I believe it must be connected otherwise nothing will happen.
       * So the output that is generated MUST be all zeros,
       * otherwise what comes out of the speakers will be affected !!!
       */
      this.worklet.connect(audioContext.destination);
    });
  }
  
  /**
   * These getters
   * can all be automatically created.
   */
  get exponent() {
    return this.params.exponent;
  }
  get trigger() {
    return this.params.trigger;
  }
  get input() {
    return this.params.input;
  }
}
