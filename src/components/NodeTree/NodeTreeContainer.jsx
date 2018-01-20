import { connect } from 'react-redux';
import { NodeTree } from './NodeTree';
import {
  memoizedStateQueries,
  // stateQueries,
  renderNodeTree,
} from '../../redux';

const mapStateToProps =
  state => ({
    // connections:
    //   state.nodeManagement.connections,
    // nodes:
    //   stateQueries.getAllNodes(state),
    connectionsInReadableFormat:
      memoizedStateQueries.getConnectionsInReadableFormat(state),
    allChains:
      memoizedStateQueries.getAllChains(state),
    alignedChains:
      renderNodeTree(state),
  });

const NodeTreeContainer =
  connect(mapStateToProps)(NodeTree);

export { NodeTreeContainer as NodeTree };
