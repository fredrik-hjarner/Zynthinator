import _ from 'lodash';
import { audioContext } from './audioContext';
import {
  AudioNode,
} from './BaseClasses';
import { ChangeRange } from './ChangeRange';

export class PWM extends AudioNode {
  constructor({ node }) {
    super();

    this.id = node.id;
    this.node = _.cloneDeep(node); // todo hmm.
    const {
      frequency,
      dutyCycleInPercent,
      minValue,
      maxValue,
      // gain // todo use gain!!!!
    } = node;

    const { sampleRate } = audioContext;

    const waveLengthInSamples =
      frequency === 0 ?
        10 ** 12 :
        sampleRate / frequency;

    this.buffer =
      audioContext.createBuffer(1, waveLengthInSamples, sampleRate);
    const data =
      this.buffer.getChannelData(0);

    const dutyCycleFactor = dutyCycleInPercent / 100;

    for (let i = 0; i < waveLengthInSamples; i++) {
      if (i < waveLengthInSamples * (1 - dutyCycleFactor)) {
        data[i] = minValue;
      } else {
        data[i] = maxValue;
      }
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
