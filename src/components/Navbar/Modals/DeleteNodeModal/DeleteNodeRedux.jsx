import {
  connect,
} from 'react-redux';
import {
  DeleteNodeControlled,
} from './DeleteNodeControlled';
import {
  memoizedStateQueries,
} from '../commonImports';

const mapStateToProps =
  (state, ownProps) => ({
    allNodesInReadableFormat:
      memoizedStateQueries.getAllNodesInReadableFormat(state),
    ...ownProps,
  });

export const DeleteNodeRedux =
  connect(
    mapStateToProps,
    {},
  )(DeleteNodeControlled);
