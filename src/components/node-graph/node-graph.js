import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { NEditor } from './new-NEditor';
import { stateQueries } from 'redux/StateQueries';
import { svgManager } from './svg';
import { NodeComponent } from './node-component';
import { getAllNodes } from 'redux/StateQueries/new-state-queries/node-queries';
import { ConnectionManager } from './connection-manager';
import {
  getConnectionsByChildNodeIdAndChildNodeInput
} from 'redux/StateQueries/new-state-queries/connection-queries';
import { createConnectionAction, deleteConnectionAction } from 'redux/modules/connection';
import { store } from 'redux/Store';
import './styles/node-graph.sass';

const mapStateToProps = (state) => ({
  nodes: getAllNodes(state),
  connections: stateQueries.getAllConnectionValues(state),
  positions: state.ui.nodeGraphPositions
});

@connect(mapStateToProps)
export class NodeGraph extends React.Component { // eslint-disable-line
  state = {
    ignoreOnce: false, // eslint-disable-line
    /**
     * Keeps data for when we are dragging out a new connection path,
     * that is before the connection is established.
     * A theoretical connection.
     */
    theoreticalConnection: {
      underConstruction: false,
      outputNode: 0,
      startPos: { x: 0, y: 0 }
    }
  }

  /**
   * Keeps a JSON of all the connection component elements.
   * dots is actually a very bad name, but the InputComponent and OutputComponent
   * both have a this.dot.
   */
  dots = {
    nodes: {}
  }

  deleteAllPaths = () => {
    const allSvgPaths = document.querySelectorAll('#connsvg *');
    Array.from(allSvgPaths).forEach(path => path.remove());
  }

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

  onOutputDotClick = (nodeId, x, y) => {

    // Can't connect an output to an output.
    if (this.state.theoreticalConnection.underConstruction) {
      return;
    }

    this.setState({
      theoreticalConnection: {
        underConstruction: true,
        outputNode: nodeId,
        startPos: { x, y }
      }
    });
  }

  onInputDotClick = (nodeId, input) => {
    const { theoreticalConnection } = this.state;

    if (theoreticalConnection.underConstruction) {
      const { outputNode } = theoreticalConnection;

      const connectionData = {
        name: '',
        parentNodeIds: [outputNode],
        childNodes: [{
          nodeId,
          input
        }]
      };

      createConnectionAction(connectionData);

      // todo if one holds shift this line under should be disabled or something.
      this.setState(prevState => ({
        theoreticalConnection: {
          ...prevState.theoreticalConnection,
          underConstruction: false
        }
      }));
    } else {
      // disconnect
      const connections = getConnectionsByChildNodeIdAndChildNodeInput(store.getState(), nodeId, input);
      if (connections.length > 0) {
        deleteConnectionAction([connections[0].id]);
      }
    }
  }

  componentDidMount() {
    svgManager.init('connsvg');
    this.renderConnections();
  }

  renderNodes = () => {
    const { nodes, positions, connections } = this.props; // eslint-disable-line

    // todo should I reset this.dots anywhere?
    this.dots = {
      nodes: {}
    };

    return Object.values(nodes).map(node => {
      const nodeComponent = (
        <NodeComponent
          nodeId={node.id}
          registerInputComponentRef={this.registerInputComponentRef(node.id)}
          registerOutputComponentRef={this.registerOutputComponentRef(node.id)}
          onOutputDotClick={this.onOutputDotClick}
          onInputDotClick={this.onInputDotClick}
        />
      );


      return nodeComponent;
    });
  }

  renderConnections = () => {
    const { connections } = this.props;

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
      inOrOut && (inOrOut.connectionIds = []); // eslint-disable-line
    });

    const dataToConnectionManager = {};

    connections.forEach(({ id, parentNodeId, childNodeId, childNodeInput }) => {
      const outputComponent = this.dots.nodes[parentNodeId].output;
      const inputComponent = this.dots.nodes[childNodeId].inputs[childNodeInput];

      outputComponent.connectionIds.push(id);
      inputComponent.connectionIds.push(id);

      const outputDot = outputComponent.dot;
      const inputDot = inputComponent.dot;

      // const connection = new Connection(inputDot, outputDot, id); // eslint-disable-line

      // outputComponent.connections.push(connection);
      // inputComponent.connections.push(connection);

      const outPos = NEditor.getConnPos(outputDot);
      const inPos = NEditor.getConnPos(inputDot);

      // const pathElement = svgManager.createQCurve(outPos.x, outPos.y, inPos.x, inPos.y);
      // pathElement.id = id;
      // svgManager.addPathToSvg(pathElement);

      dataToConnectionManager[id] = {
        x1: outPos.x,
        y1: outPos.y,
        x2: inPos.x,
        y2: inPos.y 
      };
    });

    const connectionUnderConstruction = {
      exists: this.state.theoreticalConnection.underConstruction,
      startPos: this.state.theoreticalConnection.startPos
    };

    ReactDOM.render(
      (<ConnectionManager
        store={store}
        data={dataToConnectionManager}
        connectionUnderConstruction={connectionUnderConstruction}
      />),
      this.svgElement
    );
  }

  /**
   * Invoked after all render() except the first.
   */
  componentDidUpdate = () => {
    this.renderConnections();
  }

  render = () => (
    <div id='outer-container'>
      <div id='node-graph-container'>
        <svg
          ref={ref => this.svgElement = ref} // eslint-disable-line
          id="connsvg"
        />
        {this.renderNodes()}
      </div>
    </div>
  )
}
