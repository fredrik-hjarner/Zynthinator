import { audioContext } from './audioContext';
import {
  AudioNode,
} from './BaseClasses';

export class Speakers extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    const { gain } = node;
    this.webAudioNode =
      new GainNode(audioContext, { gain });
    this.webAudioNode.connect(audioContext.destination);
  }
  get output() {
    return this.webAudioNode;
  }
  get input() {
    return this.webAudioNode;
  }
  get gain() {
    return this.webAudioNode.gain;
  }
  destruct =
    () => {
      this.webAudioNode.disconnect();
      this.webAudioNode = null;
    }
}
