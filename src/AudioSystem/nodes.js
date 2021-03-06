import _ from 'lodash';
import * as Models from './Models';

class Nodes {
  /**
   * Contains all the WEB AUDIO NODES wrappers.
   */
  nodes = {};

  addNode = (node) => {
    if (node.id === undefined) {
      debugger;
      console.log('node.id === undefined');
    }
    this.nodes[node.id] = node;
  }

  createNodes = ({ nodesThatWereAdded }) => {
    // alert(JSON.stringify(nodesThatWereAdded, null, 2));
    // go through the array and create all the nodes.
    nodesThatWereAdded.forEach((node) => {
      const { nodeType } = node;
      let audioNode;
      try {
        audioNode = new Models[nodeType]({ node });
      } catch (error) {
        debugger;
        alert(error);
        alert(`nodeType was '${nodeType}'`);
        alert(`node was '${JSON.stringify(node, null, 2)}'`);
        throw error;
      }
      
      this.addNode(audioNode);
    });
  }

  deleteNodes = ({ idsForNodesThatWereDeleted }) => { // eslint-disable-line
    // alert(JSON.stringify(nodesThatWereAdded, null, 2));
    // go through the array and create all the nodes.
    idsForNodesThatWereDeleted.forEach((nodeId) => { // eslint-disable-line
      const node = this.nodes[nodeId];
      node.destruct();
      delete this.nodes[nodeId];
    });
  }

  changeNodes = ({ nodesThatWereChanged }) => {
    nodesThatWereChanged.forEach(({ node, prevNode }) => {
      const nodeModel = this.nodes[node.id];
      const params =
        _.omit(node, [
          'id',
          'inputs',
          'output',
          'nodeType',
          'name',
        ]);
      Object.entries(params).forEach(([param, value]) => {
        if (prevNode[param] !== value) {
          // if (!(param in nodeModel)) {
          if (nodeModel[param] === undefined) {
            alert(`${param} is not exposed on the ${node.nodeType} class.`);
            debugger;
          }
          nodeModel[param].value = value;
        }
      });
    });
  }
}

export const nodes = new Nodes();
window.nodes = nodes.nodes;
