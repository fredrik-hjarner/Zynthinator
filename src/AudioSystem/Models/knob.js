import { audioContext } from './audioContext';
import { AudioNode } from './BaseClasses';

export class Knob extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    const { value } = node;

    this.webAudioNode = new ConstantSourceNode(audioContext, { offset: value });

    this.webAudioNode.start();
  }
  get value() {
    return this.webAudioNode.offset;
  }
  get output() {
    return this.webAudioNode;
  }
  destruct = () => {
    // because .disconnect can throw.
    try {
      this.webAudioNode.disconnect();
      this.webAudioNode = null;
    } catch (error) {
      //
    }
  }
}
