import * as R from 'ramda';
import { audioContext } from './audioContext';
import { AudioNode } from './BaseClasses';
import { ChangeRange } from './ChangeRange';

export class DigitalSequence extends AudioNode {
  constructor({ node }) {
    super();

    this.id = node.id;
    // this.node = _.cloneDeep(node); // todo hmm.
    const {
      sequenceOfBits,
      millisecondsPerBit,
      minValue,
      maxValue
    } = node;

    // convert to array of ints.
    const bitArray = R.map(char => (char === '1' ? 1 : 0), sequenceOfBits);

    const samplesPerSeconds = audioContext.sampleRate;
    const lengthInSeconds = (bitArray.length * millisecondsPerBit) / 1000;
    const numberOfSamples = samplesPerSeconds * lengthInSeconds;

    this.buffer = audioContext.createBuffer(1, numberOfSamples, samplesPerSeconds);
    const channelData = this.buffer.getChannelData(0);

    const samplesPerBit = numberOfSamples / bitArray.length;

    /**
     * So then just fill in the data bit per bit.
     */
    // R.chain acts as flapMap on arrays.
    // const data = R.chain(R.repeat(R._, samplesPerBit), bitArray); // todo <-- ramda bug?
    const data = R.chain(R.flip(R.repeat)(samplesPerBit), bitArray);
    channelData.set(data);

    this.webAudioNode = audioContext.createBufferSource();
    this.webAudioNode.loop = true;
    this.webAudioNode.buffer = this.buffer;

    this.webAudioNode.start();

    this.changeRangeModel =
      new ChangeRange({
        node: {
          lowestInput: 0,
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
  destruct = () => {
    this.webAudioNode.disconnect();
    this.webAudioNode = null;
    this.buffer = null;
  }
}
