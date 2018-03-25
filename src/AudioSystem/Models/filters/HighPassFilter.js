import _ from 'lodash';
import { audioContext } from 'AudioSystem/Models/audioContext';
import { AudioNode } from 'AudioSystem/Models/BaseClasses';

export class HighPassFilter extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    const options =
      _.pick(node, [
        'detune',
        'frequency',
        'Q',
      ]);
    options.type = 'highpass';
    this.webAudioNode =
      new BiquadFilterNode(audioContext, options);
  }
  get detune() {
    return this.webAudioNode.detune;
  }
  get frequency() {
    return this.webAudioNode.frequency;
  }
  get Q() {
    return this.webAudioNode.Q;
  }
  get output() {
    return this.webAudioNode;
  }
  get input() {
    return this.webAudioNode;
  }
  destruct = () => {
    this.webAudioNode.disconnect();
    this.webAudioNode = null;
  }
}
