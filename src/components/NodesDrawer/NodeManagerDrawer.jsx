import React from 'react';
// import { Popup } from 'semantic-ui-react';
import { stateQueries } from '../../redux';

export const NodeManagerDrawer =
  (props) => {
    const {
      // nodes,
      ungroupedNodes,
    } = props;
    const lis =
      ungroupedNodes.map(node => (
        <li>
          {stateQueries.getNodeInReadableFormat(node)}
        </li>));
    return [
      <ul key="nodeList">
        {lis}
      </ul>,
    ];
  };

/* NodeManagerDrawer.propTypes = {
  nodes: PropTypes.arrayOf(Node).isRequired,
}; */
