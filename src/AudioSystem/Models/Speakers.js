import { audioContext } from './audioContext';
import { AudioNode } from './BaseClasses';

export class Speakers extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    // const { gain } = node;
    this.gainNode = new GainNode(audioContext, { gain: 0 }); // todo. the hard set to zero is quite ugly.
    this.gainNode.connect(audioContext.destination);
  }
  get input() {
    return this.gainNode;
  }
  get gain() {
    return this.gainNode.gain;
  }
  destruct = () => {
    this.gainNode.disconnect();
    this.gainNode = null;
  }
}
