import {
  connect,
} from 'react-redux';
import {
  EditNodeControlled,
} from './EditNodeControlled';
import {
  memoizedStateQueries,
  stateQueries,
} from 'redux/StateQueries';

const mapStateToProps =
  state => ({
    allNodesInReadableFormat:
      memoizedStateQueries.getAllNodesInReadableFormat(state),
    nodes:
      stateQueries.getAllNodes(state),
  });

export const EditNodeRedux =
  connect(
    mapStateToProps,
    {},
  )(EditNodeControlled);
