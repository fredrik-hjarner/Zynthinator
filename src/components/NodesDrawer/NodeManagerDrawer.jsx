import React from 'react';
// import { Popup } from 'semantic-ui-react';
import { stateQueries } from '../../redux';
import { SimpleWindowRedux } from '../../components/SimpleWindow';

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
    return (
      <SimpleWindowRedux title="List of ungrouped nodes">
        <ul key="nodeList">
          {lis}
        </ul>
      </SimpleWindowRedux>
    );
  };

/* NodeManagerDrawer.propTypes = {
  nodes: PropTypes.arrayOf(Node).isRequired,
}; */
