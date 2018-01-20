import { connect } from 'react-redux';
import { Connections } from './Connections';
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

const ConnectionsContainer =
  connect(mapStateToProps)(Connections);

export { ConnectionsContainer as Connections };
