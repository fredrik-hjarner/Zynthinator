import { connect } from 'react-redux';
import { EjectNodeControlled } from './EjectNodeControlled';
import { memoizedStateQueries } from 'redux/StateQueries';
import { getAllNodes } from 'redux/StateQueries/new-state-queries/node-queries';

const mapStateToProps = (state, ownProps) => ({
  allNodesInReadableFormat: memoizedStateQueries.getAllNodesInReadableFormat(state),
  nodes: getAllNodes(state),
  ...ownProps, // todo. this actually does nothing I believe.
});

export const EjectNodeRedux = connect(mapStateToProps)(EjectNodeControlled);
