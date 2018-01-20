import {
  connect,
} from 'react-redux';
import {
  InjectNodeControlled,
} from './InjectNodeControlled';
import {
  memoizedStateQueries,
  stateQueries,
} from '../commonImports';

const mapStateToProps =
  (state, ownProps) => ({
    connectionsInReadableFormat:
      memoizedStateQueries.getConnectionsInReadableFormat(state),
    allNodesInReadableFormat:
      memoizedStateQueries.getAllNodesInReadableFormat(state),
    nodes:
      stateQueries.getAllNodes(state),
    ...ownProps, // todo. this actually does nothing I believe.
  });

export const InjectNodeRedux =
  connect(
    mapStateToProps,
    {},
  )(InjectNodeControlled);
