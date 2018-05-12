import _ from 'lodash';
import { audioContext } from './audioContext';
import { AudioNode } from './BaseClasses';
import { bypass } from './decorators';
import { safeDisconnect } from './utils';

@bypass
export class Echo2 extends AudioNode {
  constructor({ node }) {
    super();
    this.node = _.cloneDeep(node); // todo hmm.

    this.id = node.id;

    this.delayNode = new DelayNode(audioContext, {
      delayTime: node.seconds,
      maxDelayTime: 3
    });
    this.echoGainNode = new GainNode(audioContext, { gain: node.echoGain });
    this.inputBuffer = new GainNode(audioContext, { gain: 1 });
    this.ouputBuffer = new GainNode(audioContext, { gain: 1 });

    this.inputBuffer.connect(this.ouputBuffer);
    this.inputBuffer.connect(this.delayNode);
    this.delayNode.connect(this.echoGainNode);
    this.echoGainNode.connect(this.inputBuffer);
  }

  get input() {
    return this.inputBuffer;
  }

  get seconds() {
    return this.delayNode.delayTime;
  }

  get echoGain() {
    return this.echoGainNode.gain;
  }

  get output() {
    return this.ouputBuffer;
  }

  willConnectToMe = (whichInput) => {
    switch (whichInput) {
      case 'seconds':
      /**
       * delayTime can't be zero
       * so this is sort of fucked up.
       */
        this.delayNode.delayTime.value = 0.001;
        break;
      case 'echoGain':
        this.echoGainNode.gain.value = 0;
        break;
      default:
    }
  }

  willDisconnectFromMe = (whichInput) => {
    switch (whichInput) {
      case 'seconds':
      /**
       * delayTime can't be zero
       * so this is sort of fucked up.
       */
        this.delayNode.delayTime.value = this.node.seconds;
        break;
      case 'echoGain':
        this.echoGainNode.gain.value = this.node.echoGain;
        break;
      default:
    }
  }

  destruct = () => {
    safeDisconnect(this.delayNode);
    this.delayNode = null;

    safeDisconnect(this.echoGainNode);
    this.echoGainNode = null;

    safeDisconnect(this.inputBuffer);
    this.inputBuffer = null;
  }
}
