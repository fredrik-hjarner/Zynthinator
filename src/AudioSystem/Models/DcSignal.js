import { audioContext } from './audioContext';
import {
  AudioNode,
} from './BaseClasses';

export class DcSignal extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    const {
      dcValue,
    } = node;

    this.webAudioNode =
      new ConstantSourceNode(audioContext, { // eslint-disable-line
        offset:
          dcValue,
      });

    this.webAudioNode.start();
  }
  get dcValue() {
    return this.webAudioNode.offset;
  }
  get output() {
    return this.webAudioNode;
  }
  get input() {
    return this.webAudioNode;
  }
  destruct =
    () => {
      this.webAudioNode.disconnect();
      this.webAudioNode = null;
    }
}

/* export class DcSignal {
  constructor({ node }) {
    this.id = node.id;
    const {
      dcValue,
    } = node;
    const { sampleRate } = audioContext;
    const numberOfChannels = 1;
    this.buffer = audioContext.createBuffer(numberOfChannels, 1, sampleRate);
    const channelData = this.buffer.getChannelData(0);

    channelData[0] = dcValue;

    this.webAudioNode = audioContext.createBufferSource();
    this.webAudioNode.loop = true;
    this.webAudioNode.buffer = this.buffer;

    this.webAudioNode.start();
  }
  get output() {
    return this.webAudioNode;
  }
  get input() {
    return this.webAudioNode;
  }
  destruct =
    () => {
      this.webAudioNode.disconnect();
      this.webAudioNode = null;
      this.buffer = null;
    }
} */
