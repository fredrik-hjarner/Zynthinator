import { audioContext } from 'AudioSystem/Models/audioContext';
import {
  AudioNode,
} from 'AudioSystem/Models/BaseClasses';

export class FrequencyDomainAnalyser extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    const options = {
      fftSize: 2 ** 12, // default == 2**11
      maxDecibels: -30, // default == -30
      minDecibels: -100, // default == -100
      smoothingTimeConstant: 0, // default is 0.8
    };
    this.webAudioNode =
      new AnalyserNode(audioContext, options);
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
