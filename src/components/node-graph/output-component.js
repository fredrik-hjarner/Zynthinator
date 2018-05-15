import React, { Component } from 'react';
// import * as R from 'ramda';
// import { connect } from 'react-redux';
import { NEditor } from './new-NEditor';
// import { nodeTypeDefinitions } from 'NodeTypeDefinitions';
// import { moveGraphNode } from 'redux/modules/node-graph';
// import { svgManager } from './svg';
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
    const { nodeId } = this.props;
    e.stopPropagation(); e.preventDefault();
    const pos = NEditor.getConnPos(this.dot);

    // const connection = {
    //   path: svgManager.createQCurve(pos.x, pos.y, pos.x, pos.y),
    //   input: null,
    //   output: this
    // };

    this.props.onOutputDotClick(nodeId, pos.x, pos.y);

    // svgManager.addPathToSvg(connection.path);
    // this.connections.push(connection);

    // NEditor.beginConnDrag(connection);
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
