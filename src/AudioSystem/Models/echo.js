import { audioContext } from './audioContext';
import { AudioNode } from './BaseClasses';
import { bypass } from './decorators';
import { safeDisconnect } from './utils';

const processorPromise = audioContext.audioWorklet.addModule('./audio-worklet-processors/echo.js');

@bypass
export class Echo extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;

    this.outputGain = new GainNode(audioContext);
    this.workletBuffer = new GainNode(audioContext);
    this.millisecondsBuffer = new GainNode(audioContext);

    processorPromise.then(() => {
      this.worklet = new AudioWorkletNode(audioContext, 'echo'); // eslint-disable-line

      this.worklet.connect(this.outputGain);
      this.workletBuffer.connect(this.worklet);
      this.millisecondsBuffer.connect(this.worklet.parameters.get('milliseconds'));
    });
  }

  get input() {
    return this.workletBuffer;
  }

  get milliseconds() {
    return this.millisecondsBuffer;
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
