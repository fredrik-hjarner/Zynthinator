import { connect } from 'react-redux';
import { EditNodeControlled } from './EditNodeControlled';
import { memoizedStateQueries } from 'redux/StateQueries';
import { getAllNodes } from 'redux/StateQueries/new-state-queries/node-queries';

const mapStateToProps = state => ({
  allNodesInReadableFormat: memoizedStateQueries.getAllNodesInReadableFormat(state),
  nodes: getAllNodes(state),
});

export const EditNodeRedux = connect(mapStateToProps)(EditNodeControlled);
