import { audioContext } from './audioContext';
import {
  AudioNode,
} from './BaseClasses';

export class LowResolutionSine extends AudioNode {
  constructor({ node }) {
    super();
    // debugger;
    this.id = node.id;
    const {
      frequency,
      levels,
    } = node;
    const steps = levels - 1;
    // const frequency = 440;
    // const steps = 4;
    const { sampleRate } = audioContext;
    const waveLengthInSamples =
      frequency === 0 ?
        10 ** 12 :
        sampleRate / frequency;
    this.buffer =
      audioContext.createBuffer(1, waveLengthInSamples, sampleRate);
    const data =
      this.buffer.getChannelData(0);

    for (let i = 0; i < waveLengthInSamples; i++) {
      const sin =
        Math.sin(i * 2 * Math.PI * frequency / sampleRate);
      const zeroToOne =
        (sin + 1) / 2;
      const stepSize =
        1 / steps;
      data[i] =
        (Math.round(zeroToOne / stepSize) * stepSize * 2) - 1;
    }

    this.webAudioNode = audioContext.createBufferSource();
    this.webAudioNode.loop = true;
    this.webAudioNode.buffer = this.buffer;

    this.webAudioNode.start();
  }
  get output() {
    return this.webAudioNode;
  }
  /* get frequency() {

  } */
  /* get input() {
    return this.webAudioNode;
  } */
  destruct =
    () => {
      this.webAudioNode.disconnect();
      this.webAudioNode = null;
      this.buffer = null;
    }
}
