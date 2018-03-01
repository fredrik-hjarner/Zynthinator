import _ from 'lodash';
import { audioContext } from './audioContext';
import { AudioNode, withGain } from './BaseClasses';

class _TwowaySwitch extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;

    /**
     * todo hmm. can it be because if I need the params and the node
     * is deleted in state, then I will have to have cloned it.
     */
    this.node = _.cloneDeep(node);

    this.gainA = new GainNode(audioContext);
    this.gainB = new GainNode(audioContext);
    // this.switchSignalGain = new GainNode(audioContext);
    this.outputGain = new GainNode(audioContext);

    this.scriptProcessorNode = this.createScriptProcessorNode();
    /**
     * There is a bug in Chrome that force me to connect to
     * audioContext.destination.
     * https://github.com/WebAudio/web-audio-api/issues/345
     */
    this.scriptProcessorNode.connect(audioContext.destination);

    // this.gainB.connect(this.outputGain); // start out with A connected.
  }

  createScriptProcessorNode = () => {
    const scriptProcessorNode = audioContext.createScriptProcessor(256, 1, 1);
    this.lastValueWasHigh = false; // start up looking for rising edges.
    let firstTime = true;

    scriptProcessorNode.onaudioprocess = (audioProcessingEvent) => {
      const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
  
      // Look for rising and falling edges.
      for (let sample = 0; sample < 256; sample++) {
        const value = inputData[sample];
        if ((firstTime || this.lastValueWasHigh) && value < 0.5) {         // falling edge
          try {
            this.gainA.disconnect(this.outputGain);
          } catch (error) { /**/ }
          this.gainB.connect(this.outputGain);
          this.lastValueWasHigh = false;
        } else if ((firstTime || !this.lastValueWasHigh) && value >= 0.5) { // rising edge
          try {
            this.gainB.disconnect(this.outputGain);
          } catch (error) { /**/ }
          this.gainA.connect(this.outputGain);
          this.lastValueWasHigh = true;
        }
      }
      firstTime = false;
    };

    return scriptProcessorNode;
  }

  get A() {
    return this.gainA;
  }

  get B() {
    return this.gainB;
  }

  get switchSignal() {
    return this.scriptProcessorNode;
  }

  get output() {
    return this.outputGain;
  }

  destruct = () => {
    /**
     * .disconnect throws and exception when the
     * node is not connected.
     */
    try {
      this.gainA.disconnect();
      this.gainA = null;

      this.gainB.disconnect();
      this.gainB = null;

      this.scriptProcessorNode.disconnect();
      this.scriptProcessorNode = null;

      this.outputGain.disconnect();
      this.outputGain = null;
    } catch (error) { /**/ }
  }
}

export const TwowaySwitch = withGain(_TwowaySwitch);
