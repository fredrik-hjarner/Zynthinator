import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { SimpleWindowRedux } from 'components/SimpleWindow';
import { Node } from 'components/Node';
import { connect } from 'react-redux';
import { stateQueries } from 'redux/StateQueries';

const Connections = ({ connections }) => {
  // get the list of all nodes
  const numConnections = connections.length;

  if (numConnections < 1) {
    return null;
  }

  const elements =
    Object.values(connections)
      .map(({ parentNodeId, childNodeId }) => (
        <div>
          <Node nodeId={parentNodeId} display="inline-block" />
          <Icon name="long arrow right" color="grey" size="big" />
          <Node nodeId={childNodeId} display="inline-block" />
        </div>
      ));

  return (
    <SimpleWindowRedux title="Connections">
      {elements}
    </SimpleWindowRedux>
  );
};

Connections.propTypes = {
  connections: PropTypes.object.isRequired
};

// ----------------------
// Redux
// ----------------------

const mapStateToProps = state => ({
  connections: stateQueries.getAllConnections(state)
});

const ConnectionsContainer = connect(mapStateToProps)(Connections);

export { ConnectionsContainer as Connections };
