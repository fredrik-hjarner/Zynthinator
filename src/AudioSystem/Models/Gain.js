import { audioContext } from './audioContext';
import {
  AudioNode,
} from './BaseClasses';

export class Gain extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    const options = {
      gain: node.gain,
    };
    this.webAudioNode =
      new GainNode(audioContext, options);
  }
  get gain() {
    return this.webAudioNode.gain;
  }
  get output() {
    return this.webAudioNode;
  }
  get input() {
    return this.webAudioNode;
  }
  destruct =
    () => {
      this.webAudioNode.disconnect();
      this.webAudioNode = null;
    }
}
