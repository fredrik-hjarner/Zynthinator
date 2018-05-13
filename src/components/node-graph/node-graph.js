import React from 'react';
import { connect } from 'react-redux';
// import * as R from 'ramda';
import { NEditor } from './new-NEditor'; // eslint-disable-line
import { } from 'redux/modules/node-graph';
import { stateQueries } from 'redux/StateQueries';
// import { Node } from './node';
// import { nodeTypeDefinitions } from 'NodeTypeDefinitions';
import { svgManager } from './svg';
import { NodeComponent } from './node-component';
import { Connection } from './connection';
import './styles/node-graph.sass';

const mapStateToProps = (state) => { // eslint-disable-line
  return {
    nodes: stateQueries.getAllNodes(state),
    connections: stateQueries.getAllConnectionValues(state),
    positions: state.ui.nodeGraphPositions
  };
};

@connect(mapStateToProps)
export class NodeGraph extends React.Component { // eslint-disable-line
  state = {
    ignoreOnce: false // eslint-disable-line
  }

  /**
   * Keeps a JSON of all the connection component elements.
   * dots is actually a very bad name, but the InputComponent and OutputComponent
   * both have a this.dot.
   */
  dots = {
    nodes: {}
  }
  
  // graphNodes = {};

  deleteAllPaths = () => {
    const allSvgPaths = document.querySelectorAll('#connsvg *');
    Array.from(allSvgPaths).forEach(path => path.remove());
  }

  // deleteAll() {
  //   // delete all nodes
  //   Object.values(this.graphNodes).forEach(node => node.destruct());
  //   this.graphNodes = {};

  //   this.deleteAllPaths();
  // }

  // renderNodeGraph(props) {
  //   this.deleteAll();

  //   // Create all nodes
  //   Object.values(props.nodes).forEach(node => {
  //     const { nodeType } = node;
  //     const { output, connectableInputs, knobableInputs } = nodeTypeDefinitions[nodeType];
  //     const inputs = R.union(connectableInputs, knobableInputs);
  //     const position = props.positions[node.id];

  //     this.graphNodes[node.id] = new Node({
  //       name: node.nodeType, // node.name
  //       inputs,
  //       outputs: (output || nodeType === 'Knob') ? ['output'] : [],
  //       position: {
  //         x: position.x,
  //         y: position.y
  //       },
  //       parentElementId: 'node-graph-container',
  //       nodeId: node.id,
  //       connections: props.connections, // todo., shit hack. should not need to do this.
  //       nodeGraphComponent: this
  //     });
  //   });

  //   // Create all connections
  //   props.connections.forEach(({ parentNodeId, childNodeId, childNodeInput }) => {
  //     const parentNode = this.graphNodes[parentNodeId];
  //     const childNode = this.graphNodes[childNodeId];
  //     parentNode.outputs.output.connect(childNode.inputs[childNodeInput]);
  //   });
  // }

  registerInputComponentRef = nodeId => inputName => ref => {
    if (this.dots.nodes[nodeId] === undefined) {
      this.dots.nodes[nodeId] = {
        inputs: {}
      };
    }
    this.dots.nodes[nodeId].inputs[inputName] = ref;
  }

  registerOutputComponentRef = nodeId => ref => {
    if (this.dots.nodes[nodeId] === undefined) {
      this.dots.nodes[nodeId] = {
        inputs: {}
      };
    }
    this.dots.nodes[nodeId].output = ref;
  }

  componentDidMount() {
    svgManager.init('connsvg');
    // this.renderNodeGraph(this.props);
    this.renderConnections();
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('NodeGraph.componentWillReceiveProps()');
  //   if (!this.state.ignoreOnce) {
  //     this.renderNodeGraph(nextProps);
  //   } else {
  //     this.setState({ ignoreOnce: false });
  //   }
  // }

  renderNodes = () => {
    const { nodes, positions, connections } = this.props; // eslint-disable-line

    // todo should I reset this.dots anywhere?
    this.dots = {
      nodes: {}
    };

    return Object.values(nodes).map(node => (
      <NodeComponent
        nodeId={node.id}
        registerInputComponentRef={this.registerInputComponentRef(node.id)}
        registerOutputComponentRef={this.registerOutputComponentRef(node.id)}
      />
    ));
  }

  renderConnections = () => {
    const { connections } = this.props;

    // reset
    this.deleteAllPaths();

    // create array out of this.dots object.
    const inputAndOutputComponents = [];
    Object.values(this.dots.nodes).forEach(node => {
      if (node.output) {
        inputAndOutputComponents.push(node.output);
      }
      inputAndOutputComponents.push(...Object.values(node.inputs));
    });

    // clear
    inputAndOutputComponents.forEach(inOrOut => {
      inOrOut.connectionIds = []; // eslint-disable-line
    });    

    connections.forEach(({ id, parentNodeId, childNodeId, childNodeInput }) => {
      const outputComponent = this.dots.nodes[parentNodeId].output;
      const inputComponent = this.dots.nodes[childNodeId].inputs[childNodeInput];

      outputComponent.connectionIds.push(id);
      inputComponent.connectionIds.push(id);

      const outputDot = outputComponent.dot;
      const inputDot = inputComponent.dot;

      const connection = new Connection(inputDot, outputDot, id); // eslint-disable-line

      outputComponent.connections.push(connection);
      inputComponent.connections.push(connection);

      // const outPos = NEditor.getConnPos(outputDot);
      // const inPos = NEditor.getConnPos(inputDot);

      // const pathElement = svgManager.createQCurve(outPos.x, outPos.y, inPos.x, inPos.y);
      // pathElement.id = id;
      // svgManager.addPathToSvg(pathElement);
    });
  }

  /**
   * Invoked after all render() except the first.
   */
  componentDidUpdate = () => {
    this.renderConnections();
  }

  render = () => { // eslint-disable-line
    console.log('NodeGraph.render()');
    return (
      <div id='outer-container'>
        <div id='node-graph-container'>
          <svg
            ref={ref => this.svgElement = ref} // eslint-disable-line
            id="connsvg"
          />
          {this.renderNodes()}
        </div>
      </div>
    );
  };
}
