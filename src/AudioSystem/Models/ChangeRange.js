import { audioContext } from './audioContext';
import {
  AudioNode,
} from './BaseClasses';

export class ChangeRange extends AudioNode {
  constructor({ node }) {
    super();

    const {
      lowestInput,
      highestInput,
      lowestOutput,
      highestOutput,
    } = node;

    const inputRange = highestInput - lowestInput;
    const outputRange = highestOutput - lowestOutput;

    const scale =
      inputRange === 0 ?
        10 ** 15 : // todo. does this value make sense?
        outputRange / inputRange;

    this.gainNode =
      new GainNode(audioContext, { gain: scale });

    const offset =
      scale === 0 ?
        0 : // todo. does this value make sense?
        (lowestOutput - (lowestInput * scale)) / scale;

    this.constantNode =
      new ConstantSourceNode(audioContext, { offset });

    this.constantNode.start();

    this.constantNode.connect(this.gainNode);
  }
  get output() {
    return this.gainNode;
  }
  get input() {
    return this.gainNode;
  }
  destruct =
    () => {
      this.constantNode.stop();
      this.constantNode.disconnect();
      this.constantNode = null;
      this.gainNode.disconnect();
      this.gainNode = null;
    }
}
