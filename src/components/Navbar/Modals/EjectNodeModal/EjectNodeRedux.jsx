import {
  connect,
} from 'react-redux';
import {
  EjectNodeControlled,
} from './EjectNodeControlled';
import {
  memoizedStateQueries,
  stateQueries,
} from 'redux/StateQueries';

const mapStateToProps =
  (state, ownProps) => ({
    allNodesInReadableFormat:
      memoizedStateQueries.getAllNodesInReadableFormat(state),
    nodes:
      stateQueries.getAllNodes(state),
    ...ownProps, // todo. this actually does nothing I believe.
  });

export const EjectNodeRedux =
  connect(
    mapStateToProps,
    {},
  )(EjectNodeControlled);
