import { connect } from 'react-redux';
import { InjectNodeControlled } from './InjectNodeControlled';
import { memoizedStateQueries } from 'redux/StateQueries';
import { getAllNodes } from 'redux/StateQueries/new-state-queries/node-queries';

const mapStateToProps =
  (state, ownProps) => ({
    connectionsInReadableFormat:
      memoizedStateQueries.getConnectionsInReadableFormat(state),
    allNodesInReadableFormat:
      memoizedStateQueries.getAllNodesInReadableFormat(state),
    nodes:
      getAllNodes(state),
    ...ownProps, // todo. this actually does nothing I believe.
  });

export const InjectNodeRedux =
  connect(
    mapStateToProps,
    {},
  )(InjectNodeControlled);
