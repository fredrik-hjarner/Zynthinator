import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { } from 'redux/modules/node-graph';
import { stateQueries } from 'redux/StateQueries';
import { Node } from './node';
import { nodeTypeDefinitions } from 'NodeTypeDefinitions';
import './styles/node-graph.sass';

const mapStateToProps = (state) => { // eslint-disable-line
  return {
    nodes: stateQueries.getAllNodes(state),
    connections: stateQueries.getAllConnectionValues(state)
  };
};

@connect(mapStateToProps)
export class NodeGraph extends React.Component { // eslint-disable-line
  graphNodes = {};

  deleteAll() {
    // delete all nodes
    Object.values(this.graphNodes).forEach(node => node.destruct());
    this.graphNodes = {};

    // delete all paths
    const allSvgPaths = document.querySelectorAll('#connsvg *');
    Array.from(allSvgPaths).forEach(path => path.remove());
  }

  renderNodeGraph() {
    this.deleteAll();

    console.log('this.props.nodes:');
    console.dir(this.props.nodes);
    console.log('');

    // Create alla nodes
    Object.values(this.props.nodes).forEach((node, index) => {
      const { nodeType } = node;
      const { output, connectableInputs, knobableInputs } = nodeTypeDefinitions[nodeType];
      const inputs = R.union(connectableInputs, knobableInputs);

      this.graphNodes[node.id] = new Node({
        name: node.nodeType, // node.name
        inputs,
        outputs: (output || nodeType === 'Knob') ? ['Output'] : [],
        position: { x: 0, y: 100 * index }
      });
    });

    // Create all connections
    this.props.connections.forEach(({ parentNodeId, childNodeId, childNodeInput }) => {
      // n3.outputs['Output'].connect(n4.inputs['Input B']);
      const parentNode = this.graphNodes[parentNodeId];
      const childNode = this.graphNodes[childNodeId];
      parentNode.outputs.Output.connect(childNode.inputs[childNodeInput]);
    });
  }

  componentDidMount() {
    this.renderNodeGraph();
  }

  render = () => { // eslint-disable-line
    return (
      <div id='node-graph-container'/>
    );
  };
}
