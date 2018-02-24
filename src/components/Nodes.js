import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SimpleWindowRedux } from 'components/SimpleWindow';
import { stateQueries } from 'redux/StateQueries';
import { Node } from 'components/Node';

// ----------------------------------
// Nodes
// ----------------------------------

const Nodes =
  ({ nodeIds }) => {
    if (nodeIds.length < 1) {
      return null;
    }

    return (
      <SimpleWindowRedux title="Nodes">
        {
          nodeIds.map(nodeId => (
            <Node nodeId={nodeId} display="block" />
          ))
        }
      </SimpleWindowRedux>
    );
  };

Nodes.propTypes = {
  nodeIds: PropTypes.arrayOf(PropTypes.number).isRequired
};

// ----------------------------------
// NodesContainer
// ----------------------------------

const mapStateToProps =
  state => ({
    nodeIds:
      stateQueries.getAllNodeIds(state)
  });

const NodesContainer = connect(mapStateToProps)(Nodes);

export { NodesContainer as Nodes };
