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
      dutyCycle,
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

    /**
     * Create a triangle that is later modified into a
     * PWM via a WaveShaperNode
     */
    this.sawtooth = new OscillatorNode(audioContext, {
      type: 'sawtooth',
      frequency
    });
    this.sawtooth.start(); // todo. or should be started later

    this.waveShaper = audioContext.createWaveShaper();

    // const dutyCycleFactor = dutyCycleInPercent / 100;
    // const dutyCycleInSamples = Math.round(256 * dutyCycleFactor); // todo is this right?

    const pwmCurve = new Float32Array(256); // todo why 256 ????
    for (let i = 0; i < 128; i++) {
      pwmCurve[i] = minValue;
      pwmCurve[i + 128] = maxValue;
    }

    this.waveShaper.curve = pwmCurve;

    // --------------------------------
    // ConstantSourceNode
    // --------------------------------

    this.constantSource =
      new ConstantSourceNode(audioContext, {
        offset: dutyCycle,
      });

    this.constantSource.start();

    this.changeRangeModel =
      new ChangeRange({
        node: {
          lowestInput: 0,
          highestInput: 1,
          lowestOutput: -1,
          highestOutput: 1,
        },
      });

    this.constantSource.connect(this.changeRangeModel.input);
    this.changeRangeModel.output.connect(this.waveShaper);

    this.sawtooth.connect(this.waveShaper);

    // this.changeRangeModel =
    //   new ChangeRange({
    //     node: {
      
    //       lowestInput: -1,
    //       highestInput: 1,
    //       lowestOutput: minValue,
    //       highestOutput: maxValue,
    //     },
    //   });

    // this.webAudioNode.connect(this.changeRangeModel.input);
  }
  get output() {
    // return this.changeRangeModel.output;
    return this.waveShaper;
  }
  get dutyCycle() {
    return this.constantSource.offset;
  }
  get frequency() {
    return this.sawtooth.frequency;
  }
  destruct =
    () => {
      this.sawtooth.disconnect();
      this.sawtooth = null;

      this.waveShaper.disconnect();
      this.waveShaper = null;

      this.changeRangeModel.destruct();
      this.changeRangeModel = null;

      this.constantSource.disconnect();
      this.constantSource = null;
    }
}
