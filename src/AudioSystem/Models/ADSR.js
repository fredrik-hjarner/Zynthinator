import { mathHelpers } from 'helpers';
// import * as Ra from 'ramda';
import { audioContext } from './audioContext';
import { AudioNode } from './BaseClasses';
import { safeDisconnect, safeStop } from './utils';

const processorPromise = audioContext.audioWorklet.addModule('./audio-worklet-processors/edge-listener.js');

/**
 * Just a local helper function.
 */
const linToExp = value => mathHelpers.linearToExponential(0, 1, value);

const createAdsrBufferNode = (A, D, S, R, sampleRate) => {
  // create the ADSR sample per sample
  const numberOfChannels = 1;
  const numberOfSamples = sampleRate * (A + D + R);
  const buffer = audioContext.createBuffer(numberOfChannels, numberOfSamples, sampleRate);
  const channelData = buffer.getChannelData(0);

  const samplesOfA = sampleRate * A; // todo these must all be integers!!!!
  const samplesOfD = sampleRate * D;
  const samplesOfR = sampleRate * R;

  for (let i = 0; i < samplesOfA; i++) {
    channelData[i] = linToExp(i / samplesOfA);
  }
  for (let i = 0; i < samplesOfD; i++) {
    channelData[i + samplesOfA] = linToExp(S + ((1 - S) * (samplesOfD - i) / samplesOfD));
  }
  for (let i = 0; i < samplesOfR; i++) {
    channelData[i + samplesOfA + samplesOfD] = linToExp(S * (samplesOfR - i) / samplesOfR);
  }

  return buffer;
};

export class ADSR extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    const {
      A, D, S, R,
    } = node;

    const { sampleRate } = audioContext;
    
    this.buffer = createAdsrBufferNode(A, D, S, R, sampleRate);

    this.volumeInformationNode = audioContext.createBufferSource();
    this.volumeInformationNode.buffer = this.buffer;
    // Connect ADSR to gain to allow it to control volume
    // this.volumeInformationNode.connect(this.webAudioNode.gain);

    /* this.volumeInformationNode.onended = () => {
      // this.playing = false;
    }; */

    /**
     * Sandwiches the buffer node between to gain nodes
     * because... buffer nodes can only be played once in web audio api.
     * thus the buffer node must be replaced by a new node each time...
     * The sandwiching allows me to keep the connections to the other nodes.
     */
    this.gainAfter = audioContext.createGain(); // this is hacky
    this.gainAfter.gain.value = 1;

    /**
     * unityGain for 'play'
     */
    this.buffers = {
      play: new GainNode(audioContext, { gain: 1 })
    };

    processorPromise.then(() => {
      console.log('processorPromise.then()');
      this.worklet = new AudioWorkletNode(audioContext, 'edge-listener'); // eslint-disable-line
      console.log('worklet created');

      this.worklet.port.onmessage = ({ data }) => {
        if (data === 'rising-edge') {
          this.risingEdge();
        } else { // falling-edge
          this.fallingEdge();
        }
      };

      this.buffers.play.connect(this.worklet);
      this.worklet.connect(this.gainAfter);
    });
  }
  get output() {
    return this.gainAfter;
  }
  get play() {
    return this.buffers.play;
  }
  /* get input() {
    return this.webAudioNode;
  } */
  risingEdge() {
    /**
     * Apparently one needs to recreate the node
     * EVERY time I want to play it,
     * since in Web Audio API a node can only
     * be played ONCE and only once :/
     */
    safeDisconnect(this.volumeInformationNode);
    safeStop(this.volumeInformationNode);

    this.volumeInformationNode = audioContext.createBufferSource();
    this.volumeInformationNode.buffer = this.buffer;
    this.volumeInformationNode.connect(this.gainAfter);
    this.volumeInformationNode.start(0, 0);
  }
  fallingEdge() { // eslint-disable-line
    // safeDisconnect(this.volumeInformationNode);
    // safeStop(this.volumeInformationNode);
  }
  destruct = () => {
    // this.webAudioNode.disconnect();
    // this.webAudioNode = null;
    this.buffer = null;

    this.volumeInformationNode.disconnect();
    safeStop(this.volumeInformationNode);
    this.volumeInformationNode = null;
  }
}
