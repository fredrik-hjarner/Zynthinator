import _ from 'lodash';
import { audioContext } from './audioContext';
import { AudioNode } from './BaseClasses';

export class MajorTriad extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    const { frequency } = node;
    /**
     * todo hmm. can it be because if I need the params and the node
     * is deleted in state, then I will have to have cloned it.
     */
    this.node = _.cloneDeep(node);
    // const options = {
    //   frequency: node.frequency,
    //   type: node.oscillatorType,
    // };
    this.oscillatorNode = new OscillatorNode(audioContext /* , options */);

    //             0  1  2  3  4  5  6  7  8
    const sines = [0, 0, 0, 0, 1, 1, 1, 0, 0];

    //               0  1  2  3  4  5  6  7  8
    const cosines = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    const periodicWave = audioContext.createPeriodicWave(new Float32Array(sines), new Float32Array(cosines));

    this.oscillatorNode.setPeriodicWave(periodicWave);

    this.oscillatorNode.frequency.value = 0;

    /**
     * Frequency voodoo.
     */
    this.gainNode = new GainNode(audioContext);
    /**
     * /4 all frequencies.
     * I need this because the lowest frequency is
     * ground frequency times 4.
     */
    this.gainNode.gain.value = 0.25; 

    this.constantSourceNode = new ConstantSourceNode(audioContext, { offset: frequency });

    this.constantSourceNode.connect(this.gainNode);
    this.gainNode.connect(this.oscillatorNode.frequency);

    this.constantSourceNode.start();
    this.oscillatorNode.start();
  }
  get detune() {
    return this.oscillatorNode.detune;
  }
  get frequency() {
    return this.oscillatorNode.frequency;
  }
  get output() {
    return this.oscillatorNode;
  }
  destruct = () => {
    this.oscillatorNode.disconnect();
    this.oscillatorNode.stop();
    this.oscillatorNode = null;
  }
}
