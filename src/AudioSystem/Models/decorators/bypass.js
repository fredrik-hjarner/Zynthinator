import { audioContext } from 'AudioSystem/Models/audioContext';
import { safeDisconnect } from '../utils';

const processorPromise = audioContext.audioWorklet.addModule('./audio-worklet-processors/edge-listener.js');

const handler = { // todo this should be an annotation.
  get(target, key) {
    if (key in target) {
      return target[key];
    }
    /**
     * If the key is not in the object
     * then access it on the original node object.
     */
    return target.node[key];
  }
};

export const bypass = Class => class {
  constructor(node) {
    /**
     * Construct an instance of the original class
     * and store it in this.node.
     */
    this.node = new Class(node);
    /**
     * If the node is bypassed.
     */
    this.bypassed = false;

    /**
     * The outer shit should connect to the input/output buffers.
     * They should connect to the
     *   this.node.input & this.node.output
     * They should connect together on bypass.
     */
    this.inputBuffer = new GainNode(audioContext);
    this.outputBuffer = new GainNode(audioContext);
    this.workletBuffer = new GainNode(audioContext);

    this.inputBuffer.connect(this.node.input);
    this.node.output.connect(this.outputBuffer);

    processorPromise.then(() => {
      this.worklet = new AudioWorkletNode(audioContext, 'edge-listener'); // eslint-disable-line

      this.worklet.port.onmessage = ({ data }) => 
        (data === 'rising-edge' ? this.risingEdge() : this.fallingEdge());

      /**
       * I think that this is unfortunately necessary.
       * So just output zeros to the speakers.
       */
      this.worklet.connect(audioContext.destination);
      this.workletBuffer.connect(this.worklet);
    });

    return new Proxy(this, handler); // this could actually also be annotation.
  }

  risingEdge() {
    if (this.bypassed) { return; }
    /**
     * Connect the input immediately to the output.
     */
    safeDisconnect(this.inputBuffer, this.node.input);
    safeDisconnect(this.node.output, this.outputBuffer);
    this.inputBuffer.connect(this.outputBuffer);
    this.bypassed = true;
  }

  fallingEdge() {
    if (!this.bypassed) { return; }
    /**
     * 
     */
    safeDisconnect(this.inputBuffer, this.outputBuffer);
    this.inputBuffer.connect(this.node.input);
    this.node.output.connect(this.outputBuffer);
    this.bypassed = false;
  }

  /**
   * Toggles if the node is bypassed or not.
   */
  get bypass() {
    return this.workletBuffer;
  }
  get input() {
    return this.inputBuffer;
  }
  get output() {
    return this.outputBuffer;
  }
  destruct = () => {
    /**
     * Destruct onmessage first!!
     * Because it depends on nodes that might have been destructed.
     */
    this.worklet.port.onmessage = () => {};

    safeDisconnect(this.worklet); // todo fix this destruct function. send 'destroy' message.
    this.worklet = null;

    safeDisconnect(this.inputBuffer);
    this.inputBuffer = null;

    safeDisconnect(this.outputBuffer);
    this.outputBuffer = null;

    safeDisconnect(this.workletBuffer);
    this.workletBuffer = null;

    this.node.destruct();
  }
};
