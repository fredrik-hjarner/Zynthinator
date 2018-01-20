import React from 'react';
import { connect } from 'react-redux';
import { Popup } from 'semantic-ui-react';
import { SimpleWindowRedux } from '../../components/SimpleWindow';
import {
  memoizedStateQueries,
  stateQueries,
} from '../../redux';
import './style.sass';

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
      ungroupedNodes.map((node) => {
        const p = (
          <div className="nodes-node">
            {`${stateQueries.getNodeInReadableFormat(node)}`}
          </div>
        );

        const popupContent = <pre>{JSON.stringify(node, null, 2)}</pre>;

        return <Popup trigger={p} content={popupContent} position="right center" />;
      });

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
