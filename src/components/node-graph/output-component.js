import React, { Component } from 'react';
import * as R from 'ramda'; // eslint-disable-line
// import { connect } from 'react-redux';
import { NEditor } from './new-NEditor';  // eslint-disable-line
import { Input } from './input'; // eslint-disable-line
import { Output } from './output'; // eslint-disable-line
import { nodeTypeDefinitions } from 'NodeTypeDefinitions'; // eslint-disable-line
import { moveGraphNode } from 'redux/modules/node-graph'; // eslint-disable-line
import { svgManager } from './svg';
// import { getNodeById } from 'redux/StateQueries/new-state-queries/nodes-queries';
// import { getNodeGraphPositioByNodeId } from 'redux/StateQueries/new-state-queries/ui';

// const mapStateToProps = (state, ownProps) => ({
//   node: getNodeById(state, ownProps.nodeId),
//   position: getNodeGraphPositioByNodeId(state, ownProps.nodeId)
// });

// @connect(mapStateToProps)
export class OutputComponent extends Component {
  connections = [] // not used anymore?
  // connectionIds = []

  onOutputClick = (e) => { // eslint-disable-line
    e.stopPropagation(); e.preventDefault();
    const pos = NEditor.getConnPos(this.dot);

    const connection = {
      path: svgManager.createQCurve(pos.x, pos.y, pos.x, pos.y),
      input: null,
      output: this
    };

    svgManager.addPathToSvg(connection.path);
    this.connections.push(connection);

    NEditor.beginConnDrag(connection);
  }

  // Get the position of the connection ui element
  getPos() {
    return NEditor.getConnPos(this.dot);
  }

  //Used mostly for dragging nodes, so this allows the connections to be redrawn
  // updateConnectionPaths() { // eslint-disable-line
    
  // }

  render() {
    return (
      <div className='output-list'>
        <li className='Output'>
          <i
            ref={ref => this.dot = ref} // eslint-disable-line
            onClick={this.onOutputClick}
          >
            {`${' '}`}
          </i>
          <span>output</span>
        </li>
      </div>
    );
  }
}
