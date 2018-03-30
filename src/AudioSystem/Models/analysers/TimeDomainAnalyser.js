import { audioContext } from 'AudioSystem/Models/audioContext';
import {
  AudioNode,
} from 'AudioSystem/Models/BaseClasses';

export class TimeDomainAnalyser extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    const options = {
      // todo this should be taken from redux state.
      fftSize: 2 ** 11, // 15 == highest // 5 == lowest
    };
    this.webAudioNode = new AnalyserNode(audioContext, options);
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
