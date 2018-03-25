import { audioContext } from 'AudioSystem/Models/audioContext';
import { AudioNode } from 'AudioSystem/Models/BaseClasses';

export class DcSignal extends AudioNode {
  constructor({ node }) {
    super();
    this.id = node.id;
    const { dcValue } = node;

    this.constantSourceNode = new ConstantSourceNode(audioContext, { offset: dcValue });

    this.constantSourceNode.start();
  }
  get dcValue() {
    return this.constantSourceNode.offset;
  }
  get output() {
    return this.constantSourceNode;
  }
  get input() {
    return this.constantSourceNode;
  }
  destruct = () => {
    this.constantSourceNode.disconnect();
    this.constantSourceNode = null;
  }
}
