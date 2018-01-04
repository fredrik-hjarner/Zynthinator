import { connect } from 'react-redux';
import { ConnectionsDrawer } from './ConnectionsDrawer';
import {
  memoizedStateQueries,
  stateQueries,
  renderNodeTree,
} from '../../redux';

const mapStateToProps =
  state => ({
    connections:
      state.nodeManagement.connections,
    nodes:
      stateQueries.getAllNodes(state),
    connectionsInReadableFormat:
      memoizedStateQueries.getConnectionsInReadableFormat(state),
    allChains:
      memoizedStateQueries.getAllChains(state),
    alignedChains:
      renderNodeTree(state),
  });

export const ConnectionsDrawerContainer =
  connect(mapStateToProps)(ConnectionsDrawer);
