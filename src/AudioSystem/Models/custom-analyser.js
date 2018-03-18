import { audioContext } from './audioContext';
import { AudioNode } from './BaseClasses';
import { safeDisconnect } from './utils';

const processorPromise = audioContext.audioWorklet.addModule('./audio-worklet-processors/custom-analyser.js');

export class CustomAnalyser extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;

    this.outputGain = new GainNode(audioContext);
    console.log('node.samplesToStore:', node.samplesToStore);
    this.samplesToStoreNode =
      new ConstantSourceNode(audioContext, { offset: node.samplesToStore });
    this.samplesToStoreNode.start(); // todo stop and destruct correctly.

    this.inputGain = new GainNode(audioContext);

    // Return all zeros if WorkletProcessor has not loaded.
    this.requestDataPromise = () => new Promise(r => r(new Array(375).fill(0)));
    this.onData = () => {};

    processorPromise.then(() => {
      console.log('processorPromise.then()');
      this.worklet = new AudioWorkletNode(audioContext, 'custom-analyser'); // eslint-disable-line
      console.log('worklet created');

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
        // Receives an array of size node.samplesToStore.
        this.onData = resolve;
      });

      this.inputGain.connect(this.worklet);
      this.samplesToStoreNode.connect(this.worklet.parameters.get('samplesToStore'));
      this.worklet.connect(audioContext.destination);
    });
  }

  get input() {
    return this.inputGain;
  }

  get samplesToStore() {
    console.log('samplesToStore()');
    return this.samplesToStoreNode.offset;
  }
  
  destruct = () => {
    safeDisconnect(this.worklet); // todo fix this destruct function. send 'destroy' message.
    this.worklet = null;

    safeDisconnect(this.inputGain);
    this.inputGain = null;
  }
}
