import _ from 'lodash';
import { audioContext } from './audioContext';
import {
  AudioNode,
} from './BaseClasses';

export class Oscillator extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    this.node = _.cloneDeep(node); // todo hmm.
    const options = {
      frequency: node.frequency,
      type: node.oscillatorType,
    };
    this.oscillatorNode = new OscillatorNode(audioContext, options);
    this.gainNode = new GainNode(audioContext);
    this.dcBiasNode = new ConstantSourceNode(audioContext);

    this.oscillatorNode.connect(this.gainNode);

    // -------------------------------------
    // new code
    // -------------------------------------

    /**
     * Should use default values for minValue and
     * maxValue until a Node connects and overrides it.
     */
    this.minValueConnections = 0;
    this.maxValueConnections = 0;

    this.maxValueGain = new GainNode(audioContext);
    this.minValueGain = new GainNode(audioContext);
    this.scriptProcessorNode = this.createScriptProcessorNode();
    this.channelMergerNode = audioContext.createChannelMerger(2);
    this.maxValueGain.connect(this.channelMergerNode, 0, 0);
    this.minValueGain.connect(this.channelMergerNode, 0, 1);
    this.channelMergerNode.connect(this.scriptProcessorNode);
    

    // -------------------------------------
    // new code end
    // -------------------------------------

    /**
     * I add a gain node to every node type
     * so that I can connect to gain without
     * creating a gain node manually (tedious).
     */
    this.gainNode2 = new GainNode(audioContext);

    this.dcBiasNode.connect(this.gainNode2);

    this.gainNode.connect(this.gainNode2);

    // this._updateScaleAndOffset();

    this.dcBiasNode.start();
    this.oscillatorNode.start();
  }

  /**
   * Extremely unoptimized.
   * Should ideally update more seldom.
   */
  createScriptProcessorNode = () => {
    const scriptProcessorNode = audioContext.createScriptProcessor(256, 2, 1);

    scriptProcessorNode.onaudioprocess = (audioProcessingEvent) => {
      let maxValue;
      let minValue;

      if (this.maxValueConnections > 0) {
        // Float32Array:s
        // Just uses the first value as a naive way of optimizing.
        maxValue = audioProcessingEvent.inputBuffer.getChannelData(0)[0]; // eslint-disable-line
      } else {
        maxValue = this.node.maxValue; // eslint-disable-line
      }

      if (this.minValueConnections > 0) {
        minValue = audioProcessingEvent.inputBuffer.getChannelData(1)[0]; // eslint-disable-line
      } else {
        minValue = this.node.minValue; // eslint-disable-line
      }

      // Calculate the value depending on the inputs.
      this.updateScaleAndOffset(maxValue, minValue);
    };

    /**
     * There is a bug in Chrome that force me to connect to
     * audioContext.destination.
     * https://github.com/WebAudio/web-audio-api/issues/345
     */
    scriptProcessorNode.connect(audioContext.destination);

    return scriptProcessorNode;
  }

  get detune() {
    return this.oscillatorNode.detune;
  }

  get frequency() {
    return this.oscillatorNode.frequency;
  }

  get gain() {
    return this.gainNode2.gain;
  }
  
  get output() {
    return this.gainNode2;
  }

  updateScaleAndOffset = (maxValue, minValue) => {
    if (maxValue === minValue) {
      this.gainNode.gain.value = 0;
      this.dcBiasNode.offset.value = minValue;
      return;
    }

    const gain = (maxValue - minValue) / 2;
    this.gainNode.gain.value = gain;

    const dcValue = (maxValue + minValue) / 2;
    this.dcBiasNode.offset.value = dcValue;
  }

  get minValue() {
    return this.minValueGain;
  }

  get maxValue() {
    return this.maxValueGain;
  }

  willConnectToMe = (whichInput) => {
    switch (whichInput) {
      case 'gain':
        this.gainNode2.gain.value = 0;
        break;
      case 'minValue':
        this.minValueConnections++;
        break;
      case 'maxValue':
        this.maxValueConnections++;
        break;
      default:
    }
  }

  willDisconnectFromMe = (whichInput) => {
    switch (whichInput) {
      case 'gain':
        this.gainNode2.gain.value = 1;
        break;
      case 'minValue':
        this.minValueConnections--;
        break;
      case 'maxValue':
        this.maxValueConnections--;
        break;
      default:
    }
  }

  destruct = () => {
    try {
      /**
       * delete scriptProcessorNode first because it
       * runs checks on other nodes.
       */
      this.scriptProcessorNode.disconnect();
      this.scriptProcessorNode.onaudioprocess = () => {};
      this.scriptProcessorNode = null;

      this.oscillatorNode.disconnect();
      this.oscillatorNode = null;

      this.gainNode.disconnect();
      this.gainNode = null;

      this.dcBiasNode.disconnect();
      this.dcBiasNode = null;

      this.maxValueGain.disconnect();
      this.maxValueGain = null;

      this.minValueGain.disconnect();
      this.minValueGain = null;

      this.channelMergerNode.disconnect();
      this.channelMergerNode = null;

      this.gainNode2.disconnect();
      this.gainNode2 = null;
    } catch (error) {
      alert(error);
      console.log(error);
      debugger;
    }
  }
}
