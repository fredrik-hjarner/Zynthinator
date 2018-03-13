// import _ from 'lodash';
import { audioContext } from './audioContext';
import { AudioNode } from './BaseClasses';

const processorPromise = audioContext.audioWorklet.addModule('./audio-worklet-processors/change-range.js');
// .then(() => {
//   let node = new AudioWorkletNode(audioContext, 'change-range');
// });

export class ChangeRange extends AudioNode {
  constructor({ node }) {
    super();

    this.id = node.id;

    // this.node = _.cloneDeep(node); // todo hmm.

    const {
      lowestInput,
      highestInput,
      lowestOutput,
      highestOutput,
    } = node;

    this.defaultValueNodes = {
      lowestInput: new ConstantSourceNode(audioContext, { offset: lowestInput }),
      highestInput: new ConstantSourceNode(audioContext, { offset: highestInput }),
      lowestOutput: new ConstantSourceNode(audioContext, { offset: lowestOutput }),
      highestOutput: new ConstantSourceNode(audioContext, { offset: highestOutput })
    };

    /**
     * These nodes exist so that there is always something to connect to
     * even if the AudioWorkletProcessor has not loaded yet.
     */
    this.unityGainNodes = {
      input: new GainNode(audioContext, { gain: 1 }),
      output: new GainNode(audioContext, { gain: 1 }),
      lowestOutput: new GainNode(audioContext, { gain: 1 }),
      highestOutput: new GainNode(audioContext, { gain: 1 })
    };

    /**
     * These should be disconnected when something else connects.
     */
    this.defaultValueNodes.lowestOutput.connect(this.unityGainNodes.lowestOutput);
    this.defaultValueNodes.highestOutput.connect(this.unityGainNodes.highestOutput);

    /**
     * So wtf...
     * Every instance can perhaps subscribe to
     * processorPromise.then... maybe
     */
    processorPromise.then(() => {
      /**
       * Wtf should happen here?
       */
      // Reconnect stuff.
      // I should have a lot of UnityBuffers. For input and output.
      /**
       * Connect
       * this.defaultValueNodes.lowestInput & this.defaultValueNodes.highestInput
       * to changeRange.
       */
      /**
       * Connect
       * this.unityGainNodes.input & this.unityGainNodes.lowestOutput
       * & this.unityGainNodes.highestOutput
       * to changeRange.
       */
      this.changeRange = new AudioWorkletNode(audioContext, 'change-range'); // eslint-disable-line
      console.log('In file ChangeRange.js:');
      console.log('this.changeRange:');
      console.dir(this.changeRange);
      console.log('');

      this.unityGainNodes.input.connect(this.changeRange);

      const params = this.changeRange.parameters;

      this.defaultValueNodes.lowestInput.connect(params.get('lowestInput'));
      this.defaultValueNodes.highestInput.connect(params.get('highestInput'));

      this.unityGainNodes.lowestOutput.connect(params.get('lowestOutput'));
      this.unityGainNodes.highestOutput.connect(params.get('highestOutput'));

      this.changeRange.connect(this.unityGainNodes.output);
    });
  }

  get output() {
    return this.unityGainNodes.output;
  }

  get input() {
    return this.unityGainNodes.input;
  }

  get lowestOutput() {
    return this.unityGainNodes.lowestOutput;
  }

  get highestOutput() {
    return this.unityGainNodes.highestOutput;
  }

  destruct = () => {
    // this.constantNode.stop(); // todo
    // this.constantNode.disconnect();
    // this.constantNode = null;

    // this.gainNode.disconnect();
    // this.gainNode = null;
  }
}
