import { NEditor } from './Neditor';
import { Input } from './input';
import { Output } from './output';

/* eslint-disable */
export class Node {
  constructor({ name, inputs = [], outputs = [], position = { x: 0, y: 0 } }) {
    this.name = name;
    this.inputs = {};
    this.outputs = {};
  
    //.........................
    this.eRoot = document.createElement('div');
    document.body.appendChild(this.eRoot);
    this.eRoot.className = 'NodeContainer';
    this.eRoot.ref = this;
  
    //.........................
    const eHeader = document.createElement('header');
    this.eRoot.appendChild(eHeader);
    eHeader.innerHTML = this.name;
    eHeader.addEventListener('mousedown', this.onHeaderDown);
  
    //.........................
    const inputAndOutputContainer = document.createElement('div');
    inputAndOutputContainer.className = 'inputAndOutputContainer';
    this.eRoot.appendChild(inputAndOutputContainer);

    const inputListDiv = document.createElement('div');
    inputListDiv.className = 'input-list';
    inputAndOutputContainer.appendChild(inputListDiv);

    const outputListDiv = document.createElement('div');
    outputListDiv.className = 'output-list';
    inputAndOutputContainer.appendChild(outputListDiv);

    inputs.forEach(input => this.addInput(inputListDiv, input));
    
    outputs.forEach(output => this.addOutput(outputListDiv, output));

    this.setPosition(position.x, position.y);
    
    // redux action
    // createNode({ name, inputs, outputs, position });
  }

  addInput(inputListDiv, name) {
    if (this.inputs[name]) {
      throw `'${name}' already exists as an input`;
    }
    const o = new Input(inputListDiv, name, this.name);
    this.inputs[name] = o;
  }

  addOutput(outputListDiv, name) {
    if (this.outputs[name]) {
      throw `'${name}' already exists as an output`;
    }
    const o = new Output(outputListDiv, name, this.name);
    this.outputs[name] = o;
  }

  // getInputPos(i) {
  //   return NEditor.getConnPos(this.inputs[i].dot);
  // }

  // getOutputPos(i) {
  //   return NEditor.getConnPos(this.outputs[i].dot);
  // }

  updateConnectionPaths() {
    Object.values(this.inputs).forEach(input => input.updateConnectionPaths());
    Object.values(this.outputs).forEach(output => output.updateConnectionPaths());
  }

  //Handle the start node dragging functionality
  onHeaderDown(e) {
    e.stopPropagation();
    NEditor.beginNodeDrag(e.target.parentNode, e.pageX, e.pageY);
  }

  setPosition(x, y) {
    this.eRoot.style.left = `${x }px`;
    this.eRoot.style.top = `${y }px`;
  }

  destruct() {
    this.eRoot.remove();
  }
}
