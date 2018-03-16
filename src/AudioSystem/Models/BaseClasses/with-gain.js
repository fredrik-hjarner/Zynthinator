import { audioContext } from 'AudioSystem/Models/audioContext';

const handler = {
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

export const withGain = Class => class {
  constructor(node) {
    this.node = new Class(node);
  
    this.gainNode = audioContext.createGain();
    this.gainNode.gain.value = 1;
  
    this.node.output.connect(this.gainNode);

    return new Proxy(this, handler);
  }
    
  get output() {
    return this.gainNode;
  }
    
  get gain() {
    return this.gainNode.gain;
  }
    
  willConnectToMe = (whichInput) => {
    // console.log('willConnectToMe');
    if (whichInput === 'gain') {
      this.gainNode.gain.value = 0;
    }
  }

  willDisconnectFromMe = (whichInput) => {
    // console.log('willDisconnectFromMe');
    if (whichInput === 'gain') {
      this.gainNode.gain.value = 1;
    }
  }

  destruct = () => {
    this.node.destruct();

    this.gainNode.disconnect();
    this.gainNode = null;
  }
};
