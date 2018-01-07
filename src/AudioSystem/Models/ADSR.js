import * as Ra from 'ramda';
import { audioContext } from './audioContext';
import {
  mathHelpers,
} from '../../helpers/';
import {
  AudioNode,
} from './BaseClasses';

/**
 * Just a local helper function.
 */
const linToExp =
  value =>
    mathHelpers.linearToExponential(0, 1, value);

export class ADSR extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    const {
      A, D, S, R,
    } = node;

    const { sampleRate } = audioContext;
    
    // create the ADSR sample per sample
    const numberOfChannels = 1;
    const numberOfSamples = sampleRate * (A + D + R);
    this.buffer = audioContext.createBuffer(numberOfChannels, numberOfSamples, sampleRate);
    const channelData = this.buffer.getChannelData(0);

    const samplesOfA = sampleRate * A; // todo these must all be integers!!!!
    const samplesOfD = sampleRate * D;
    const samplesOfR = sampleRate * R;

    for (let i = 0; i < samplesOfA; i++) {
      channelData[i] =
        linToExp(i / samplesOfA);
    }
    for (let i = 0; i < samplesOfD; i++) {
      channelData[i + samplesOfA] =
        linToExp(S + ((1 - S) * (samplesOfD - i) / samplesOfD));
    }
    for (let i = 0; i < samplesOfR; i++) {
      channelData[i + samplesOfA + samplesOfD] =
        linToExp(S * (samplesOfR - i) / samplesOfR);
    }

    /**
     * Sandwiches the buffer node between to gain nodes
     * because... buffer nodes can only be played once in web audio api.
     * thus the buffer node must be replaced by a new node each time...
     * The sandwiching allows me to keep the connections to the other nodes.
     */
    this.gainAfter = audioContext.createGain(); // this is hacky
    this.gainAfter.gain.value = 1;

    /* this.volumeInformationNode = audioContext.createBufferSource();
    this.volumeInformationNode.buffer = this.buffer; */
    // Connect ADSR to gain to allow it to control volume
    // this.volumeInformationNode.connect(this.webAudioNode.gain);

    /* this.volumeInformationNode.onended =
      () => {
        // this.playing = false;
      }; */
  }
  get output() {
    return this.gainAfter;
  }
  /* get input() {
    return this.webAudioNode;
  } */
  play() {
    /**
     * Apparently one needs to recreate the node
     * EVERY time I want to play it,
     * since in Web Audio API a node can only
     * be played ONCE and only once :/
     */
    if (Ra.complement(Ra.isNil)(this.volumeInformationNode)) {
      this.volumeInformationNode.disconnect();
    }
    this.volumeInformationNode = audioContext.createBufferSource();
    this.volumeInformationNode.buffer = this.buffer;
    this.volumeInformationNode.connect(this.gainAfter);
    this.volumeInformationNode.start(0, 0);
  }
  destruct =
    () => {
      // this.webAudioNode.disconnect();
      // this.webAudioNode = null;
      this.buffer = null;

      this.volumeInformationNode.disconnect();
      this.volumeInformationNode.stop();
      this.volumeInformationNode = null;
    }
}
