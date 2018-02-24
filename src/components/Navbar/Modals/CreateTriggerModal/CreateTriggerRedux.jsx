import {
  connect,
} from 'react-redux';
import {
  CreateTriggerControlled,
} from './CreateTriggerControlled';
import { memoizedStateQueries } from 'redux/StateQueries';

const mapStateToProps =
  (state) => {
    const {
      nodes,
    } = state.nodeManagement;
    const nodesThatHaveInputs =
      memoizedStateQueries.getNodesForCreateTriggerModal(state);
    return {
      nodes,
      nodesThatHaveInputs,
    };
  };

export const CreateTriggerRedux =
  connect(
    mapStateToProps,
    {},
  )(CreateTriggerControlled);
