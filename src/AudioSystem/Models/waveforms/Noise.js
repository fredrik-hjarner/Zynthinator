import { audioContext } from 'AudioSystem/Models/audioContext';
import { withGain } from 'AudioSystem/Models/decorators';

@withGain
export class Noise {
  constructor({ node }) {
    this.id = node.id;
    const { sampleRate } = audioContext;
    const noiseInSeconds = 1; // 1 second noise... too much or too little?
    const numberOfChannels = 1;
    const numberOfSamples = sampleRate * noiseInSeconds;
    this.buffer = audioContext.createBuffer(numberOfChannels, numberOfSamples, sampleRate);
    const data = this.buffer.getChannelData(0);

    for (let i = 0; i < numberOfSamples; i++) {
      data[i] = (Math.random() * 2) - 1;
    }

    this.webAudioNode = audioContext.createBufferSource();
    this.webAudioNode.loop = true;
    this.webAudioNode.buffer = this.buffer;

    // this.gainNode = new GainNode(audioContext);
    // this.webAudioNode.connect(this.gainNode);
    this.webAudioNode.start();
  }
  get output() {
    return this.webAudioNode;
  }
  // get gain() {
  //   return this.gainNode.gain;
  // }
  destruct = () => {
    this.webAudioNode.disconnect();
    this.webAudioNode = null;
    this.buffer = null;

    // this.gainNode.disconnect();
    // this.gainNode = null;
  }
}
