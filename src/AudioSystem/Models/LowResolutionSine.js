import _ from 'lodash';
import { audioContext } from './audioContext';
import {
  AudioNode,
} from './BaseClasses';
import { ChangeRange } from './ChangeRange';

export class LowResolutionSine extends AudioNode {
  constructor({ node }) {
    super();
    // debugger;
    this.id = node.id;
    this.node = _.cloneDeep(node); // todo hmm.
    const {
      frequency,
      levels,
      minValue,
      maxValue,
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

    this.changeRangeModel =
      new ChangeRange({
        node: {
          lowestInput: -1,
          highestInput: 1,
          lowestOutput: minValue,
          highestOutput: maxValue,
        },
      });

    this.webAudioNode.connect(this.changeRangeModel.input);
  }
  get output() {
    return this.changeRangeModel.output;
  }
  destruct =
    () => {
      this.webAudioNode.disconnect();
      this.webAudioNode = null;
      this.buffer = null;
    }
}
