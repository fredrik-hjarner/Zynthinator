import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { } from 'redux/modules/node-graph';
import { stateQueries } from 'redux/StateQueries';
import { Node } from './node';
import { nodeTypeDefinitions } from 'NodeTypeDefinitions';
import { svgManager } from './svg';
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

  renderNodeGraph(props) {
    this.deleteAll();

    let yAccum = 0;

    // Create all nodes
    Object.values(props.nodes).forEach(node => {
      const { nodeType } = node;
      const { output, connectableInputs, knobableInputs } = nodeTypeDefinitions[nodeType];
      const inputs = R.union(connectableInputs, knobableInputs);

      this.graphNodes[node.id] = new Node({
        name: node.nodeType, // node.name
        inputs,
        outputs: (output || nodeType === 'Knob') ? ['output'] : [],
        position: { x: 0, y: yAccum },
        parentElementId: 'node-graph-container',
        nodeId: node.id,
        connections: props.connections // todo., shit hack. should not need to do this.
      });

      const multi = inputs.length > 0 ? inputs.length : 1;
      yAccum += 40 + (multi * 31);
    });

    // console.log('props.connections:');
    // console.dir(props.connections);
    // console.log('');

    // Create all connections
    props.connections.forEach(({ parentNodeId, childNodeId, childNodeInput }) => {
      // n3.outputs['Output'].connect(n4.inputs['Input B']);
      const parentNode = this.graphNodes[parentNodeId];
      const childNode = this.graphNodes[childNodeId];
      parentNode.outputs.output.connect(childNode.inputs[childNodeInput]);
    });
  }

  componentDidMount() {
    svgManager.init('connsvg');
    this.renderNodeGraph(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.renderNodeGraph(nextProps);
  }

  render = () => { // eslint-disable-line
    return (
      <div id='node-graph-container'>
        <svg id="connsvg"/>
      </div>
    );
  };
}
