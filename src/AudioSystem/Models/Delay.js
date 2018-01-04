import { audioContext } from './audioContext';
import {
  AudioNode,
} from './BaseClasses';

export class Delay extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    const options = {
      delayTime:
        node.delayTime,
      maxDelayTime:
        3,
    };
    this.webAudioNode =
      new DelayNode(audioContext, options);
  }
  get delayTime() {
    return this.webAudioNode.delayTime;
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
