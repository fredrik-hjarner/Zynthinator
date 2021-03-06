import { audioContext } from './audioContext';
import { AudioNode } from './BaseClasses';
import { withGain } from './decorators';
import {
  safeDisconnect
  // safeConnect
} from './utils';

const processorPromise = audioContext.audioWorklet.addModule('./audio-worklet-processors/edge-listener.js');

@withGain
export class TwowaySwitch extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;

    /**
     * todo hmm. can it be because if I need the params and the node
     * is deleted in state, then I will have to have cloned it.
     */
    // this.node = _.cloneDeep(node);

    this.gainA = new GainNode(audioContext);
    this.gainB = new GainNode(audioContext);
    this.outputGain = new GainNode(audioContext);
    this.workletBuffer = new GainNode(audioContext);

    // this.gainB.connect(this.outputGain); // start out with A connected.

    processorPromise.then(() => {
      // console.log('processorPromise.then()');
      this.worklet = new AudioWorkletNode(audioContext, 'edge-listener'); // eslint-disable-line
      // console.log('worklet created');

      this.worklet.port.onmessage = ({ data }) => {
        if (data === 'rising-edge') {
          this.risingEdge();
        } else { // falling-edge
          this.fallingEdge();
        }
      };

      /**
       * I think that this is unfortunately necessary.
       * So just output zeros to the speakers.
       */
      this.worklet.connect(audioContext.destination);
      this.workletBuffer.connect(this.worklet);
    });
  }

  risingEdge() {
    safeDisconnect(this.gainB, this.outputGain);
    this.gainA.connect(this.outputGain);
    // safeConnect(this.gainA, this.outputGain);
  }

  fallingEdge() {
    safeDisconnect(this.gainA, this.outputGain);
    this.gainB.connect(this.outputGain);
    // safeConnect(this.gainB, this.outputGain);
  }

  get A() {
    return this.gainA;
  }

  get B() {
    return this.gainB;
  }

  get switchSignal() { // todo this should be renamed 'input'
    return this.workletBuffer;
  }

  get output() {
    return this.outputGain;
  }

  destruct = () => {
    /**
     * Destruct onmessage first!!
     * Because it depends on nodes that might have been destructed.
     */
    this.worklet.port.onmessage = () => {};
    // this.worklet.port.onmessage = undefined;

    safeDisconnect(this.worklet); // todo fix this destruct function. send 'destroy' message.
    this.worklet = null;

    safeDisconnect(this.workletBuffer);
    this.workletBuffer = null;

    safeDisconnect(this.gainA);
    this.gainA = null;

    safeDisconnect(this.gainB);
    this.gainB = null;

    safeDisconnect(this.outputGain);
    this.outputGain = null;
  }
}
