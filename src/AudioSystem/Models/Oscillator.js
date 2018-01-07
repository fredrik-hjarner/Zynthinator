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
    this.oscillatorNode =
      new OscillatorNode(audioContext, options);

    this.gainNode =
      new GainNode(audioContext);

    this.dcBiasNode =
      new ConstantSourceNode(audioContext);

    // this.dcBiasNode.connect(this.gainNode);

    /* this.secondsToDelay =
      (node.frequency === 0 ?
        0 :
        node.phase / node.frequency);
    const delayNodeOptions = {
      delayTime:
        this.secondsToDelay,
      maxDelayTime:
        3,
    };
    this.delayNode =
      new DelayNode(audioContext, delayNodeOptions); */

    /* const gainBeforeDelay =
      (node.frequency === 0 ?
        0 :
        1 / node.frequency);
    this.gainBeforeDelayNode =
      new GainNode(audioContext, {
        gain:
          gainBeforeDelay,
      }); */

    // this.gainBeforeDelayNode.connect(this.delayNode.delayTime);

    // this.gainNode.connect(this.delayNode);

    this.oscillatorNode.connect(this.gainNode);

    /**
     * I add a gain node to every node type
     * so that I can connect to gain without
     * creating a gain node manually (tedious).
     */
    this.gainNode2 =
      new GainNode(audioContext);

    this.dcBiasNode.connect(this.gainNode2);

    this.gainNode.connect(this.gainNode2);

    this._updateScaleAndOffset();

    this.dcBiasNode.start();
    this.oscillatorNode.start();
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
  /* get phase() {
    return this.gainBeforeDelayNode; // this might be contra-intuitive but the gainNode is needed.
  } */
  get output() {
    return this.gainNode2;
  }
  _updateScaleAndOffset =
    () => {
      const gain =
        (this.node.maxValue - this.node.minValue) / 2;

      if (this.node.maxValue === this.node.minValue) {
        this.gainNode.gain.value = 0;
        this.dcBiasNode.offset.value = this.node.minValue;
        return;
      }

      this.gainNode.gain.value = gain;
  
      const dcValue =
        ((this.node.maxValue + this.node.minValue) / 2);

      this.dcBiasNode.offset.value = dcValue;
    }
  get minValue() {
    // return an object that has a 'value' field
    // That can be set
    return {
      _this:
        this,
      set value(minValue) {
        const { _this } = this;
        _this.node.minValue = minValue;
        _this._updateScaleAndOffset();
      },
    };
  }
  get maxValue() {
    // return an object that has a 'value' field
    // That can be set
    return {
      _this:
        this,
      set value(maxValue) {
        const { _this } = this;
        _this.node.maxValue = maxValue;
        _this._updateScaleAndOffset();
      },
    };
  }
  willConnectToMe =
    (whichInput) => {
      if (whichInput === 'gain') {
        this.gainNode2.gain.value = 0;
      }
    }
  willDisconnectFromMe =
    (whichInput) => {
      if (whichInput === 'gain') {
        this.gainNode2.gain.value = 1;
      }
    }
  /* get input() {
    return this.oscillatorNode;
  } */
  destruct =
    () => {
      this.oscillatorNode.disconnect();
      this.oscillatorNode = null;

      this.gainNode.disconnect();
      this.gainNode = null;

      // this.dcBiasNode.destruct();
      this.dcBiasNode.disconnect();
      this.dcBiasNode = null;

      /* this.delayNode.disconnect();
      this.delayNode = null;

      this.gainBeforeDelayNode.disconnect();
      this.gainBeforeDelayNode = null; */
    }
}
