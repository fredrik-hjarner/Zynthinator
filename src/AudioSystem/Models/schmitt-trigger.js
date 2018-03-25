import { audioContext } from './audioContext';
import { AudioNode } from './BaseClasses';
import { safeDisconnect } from './utils';

const processorPromise = audioContext.audioWorklet.addModule('./audio-worklet-processors/schmitt-trigger.js');

export class SchmittTrigger extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;

    this.outputGain = new GainNode(audioContext);
    this.workletBuffer = new GainNode(audioContext);
    this.thresholdBuffer = new GainNode(audioContext);

    processorPromise.then(() => {
      // console.log('processorPromise.then()');
      this.worklet = new AudioWorkletNode(audioContext, 'schmitt-trigger'); // eslint-disable-line
      // console.log('worklet created');

      this.worklet.connect(this.outputGain);
      this.workletBuffer.connect(this.worklet);
      this.thresholdBuffer.connect(this.worklet.parameters.get('threshold'));
    });
  }

  get input() {
    return this.workletBuffer;
  }

  get threshold() {
    return this.thresholdBuffer;
  }

  get output() {
    return this.outputGain;
  }

  destruct = () => {
    safeDisconnect(this.gainA);
    this.gainA = null;

    safeDisconnect(this.gainB);
    this.gainB = null;

    safeDisconnect(this.worklet); // todo fix this destruct function. send 'destroy' message.
    this.worklet = null;

    safeDisconnect(this.workletBuffer);
    this.workletBuffer = null;

    safeDisconnect(this.outputGain);
    this.outputGain = null;
  }
}
