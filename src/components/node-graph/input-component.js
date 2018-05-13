import React, { Component } from 'react';
import * as R from 'ramda'; // eslint-disable-line
// import { connect } from 'react-redux';
import { NEditor } from './new-NEditor';  // eslint-disable-line
import { Input } from './input'; // eslint-disable-line
import { Output } from './output'; // eslint-disable-line
import { nodeTypeDefinitions } from 'NodeTypeDefinitions'; // eslint-disable-line
import { moveGraphNode } from 'redux/modules/node-graph'; // eslint-disable-line
import { createConnectionAction, deleteConnectionAction } from 'redux/modules/connection'; // eslint-disable-line
import { svgManager } from './svg';
// import { getNodeById } from 'redux/StateQueries/new-state-queries/nodes-queries';
// import { getNodeGraphPositioByNodeId } from 'redux/StateQueries/new-state-queries/ui';

// const mapStateToProps = (state, ownProps) => ({
//   node: getNodeById(state, ownProps.nodeId),
//   position: getNodeGraphPositioByNodeId(state, ownProps.nodeId)
// });

// @connect(mapStateToProps)
export class InputComponent extends Component {
  connections = [] // not used anymore??
  // connectionIds = []

  onInputClick = (e) => { // eslint-disable-line
    e.stopPropagation(); e.preventDefault();

    switch (NEditor.dragMode) {

      // Path drag
      case 2: // eslint-disable-line
        this.finishCreateConnection(NEditor.dragItem);
        const connection = NEditor.dragItem;

        const parentNodeId = connection.output.props.nodeId;
        const childNodeId = this.props.nodeId;
        const { input } = this.props;

        const connectionData = {
          name: '',
          parentNodeIds: [parentNodeId],
          childNodes: [{
            nodeId: childNodeId,
            input
          }]
        };

        console.log('connectionData:');
        console.dir(connectionData);
        console.log('');

        createConnectionAction(connectionData);
        NEditor.endConnDrag();
        break;

      //Not in drag mode
      case 0: // eslint-disable-line
        const path = this.disconnectInput();
        if (path) {
          NEditor.beginConnDrag(path);
        }
        break;
      default:
        throw 'default case';
    }
  }

  // This concretely establishes the connection.
  //Applying a connection from an output
  /**
   *  connection = {
   *    input: Input,
   *    output: Input,
   *    path: SVGPathElement
   *  }
   */
  finishCreateConnection = (connection) => {
    //Saving this connection as the input reference
    connection.input = this;  // eslint-disable-line

    this.connections.push(connection); //Saving the path reference to this object
    // this.updateDotColor(); //Update the state on both sides of the connection, TODO some kind of event handling scheme would work better maybe
    // connection.output.updateDotColor();

    // NEditor.updateConnPath(connection);
    svgManager.setCurveColor(connection.path, true);
  }

  // Get the position of the connection ui element
  getPos() {
    return NEditor.getConnPos(this.dot);
  }

  //clearing the connection from an output
  disconnectInput = () => { // eslint-disable-line
    if (this.connectionIds.length === 0) {
      return;
    }

    /**
     * Ignore once is to make it so that React doesn not rerender everything
     * it should not remove the path that we are now trying to retie to
     * some other input.
     */
    // this.nodeGraphComponent.setState({ ignoreOnce: true }, () => deleteConnectionAction([id]));
    deleteConnectionAction([this.connectionIds[0]]);

    this.connectionIds.shift();
  }

  //Used mostly for dragging nodes, so this allows the connections to be redrawn
  // updateConnectionPaths() { // eslint-disable-line
  //   this.connections.forEach(NEditor.updateConnPath);
  // }

  render() {
    const { nodeId, input } = this.props;

    return (
      <li key={`${nodeId}-${input}`} className='Input'>
        <i
          ref={ref => this.dot = ref} // eslint-disable-line
          onClick={this.onInputClick}
        >
          {`${' '}`}
        </i>
        <span>{input}</span>
      </li>
    );
  }
}
