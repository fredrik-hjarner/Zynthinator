import _ from 'lodash';
import { audioContext } from './audioContext';
import { AudioNode } from './BaseClasses';

export class HarmonicChord extends AudioNode {
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

    const sines = new Float32Array(2);
    const cosines = new Float32Array(2);

    sines[0] = 0;
    cosines[0] = 0;
    sines[1] = 1;
    cosines[1] = 0;

    const periodicWave = audioContext.createPeriodicWave(sines, cosines);

    this.oscillatorNode.setPeriodicWave(periodicWave);

    this.oscillatorNode.frequency.value = frequency;

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
