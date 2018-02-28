import { audioContext } from './audioContext';
import {
  AudioNode,
} from './BaseClasses';

export class DcSignal extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    const {
      dcValue,
    } = node;

    this.webAudioNode =
      new ConstantSourceNode(audioContext, { // eslint-disable-line
        offset:
          dcValue,
      });

    this.webAudioNode.start();
  }
  get dcValue() {
    return this.webAudioNode.offset;
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
