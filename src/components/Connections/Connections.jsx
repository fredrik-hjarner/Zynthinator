import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { SimpleWindowRedux } from '../../components/SimpleWindow';
import { Node } from '../Node';

export const Connections =
  ({ connections }) => {
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
