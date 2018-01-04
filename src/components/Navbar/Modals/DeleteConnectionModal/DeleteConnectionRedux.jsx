import {
  connect,
} from 'react-redux';
import {
  DeleteConnectionControlled,
} from './DeleteConnectionControlled';
import {
  memoizedStateQueries,
} from '../commonImports';

const mapStateToProps =
  (state, ownProps) => ({
    connectionsInReadableFormat:
      memoizedStateQueries.getConnectionsInReadableFormat(state),
    ...ownProps,
  });

export const DeleteConnectionRedux =
  connect(
    mapStateToProps,
    {},
  )(DeleteConnectionControlled);
