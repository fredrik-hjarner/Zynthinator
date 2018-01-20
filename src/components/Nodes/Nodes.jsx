import React from 'react';
import { connect } from 'react-redux';
import { SimpleWindowRedux } from '../../components/SimpleWindow';
import {
  memoizedStateQueries,
  stateQueries,
} from '../../redux';

// ----------------------------------
// Connections
// ----------------------------------

const Nodes =
  (props) => {
    const {
      // nodes,
      ungroupedNodes,
    } = props;

    const lis =
      ungroupedNodes.map(node => (
        <p>
          {`id${node.id}: ${stateQueries.getNodeInReadableFormat(node)}`}
        </p>));

    if (lis.length < 1) {
      return null;
    }

    return (
      <SimpleWindowRedux title="List of ungrouped nodes">
        {lis}
      </SimpleWindowRedux>
    );
  };

// ----------------------------------
// ConnectionsContainer
// ----------------------------------

const mapStateToProps =
  state => ({
    ungroupedNodes:
      memoizedStateQueries.getAllUngroupedNodes(state),
    nodes:
      stateQueries.getAllNodes(state),
  });

const NodesContainer = connect(mapStateToProps)(Nodes);

export { NodesContainer as Nodes };
