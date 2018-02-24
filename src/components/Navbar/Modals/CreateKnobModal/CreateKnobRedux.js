import {
  connect,
} from 'react-redux';
import {
  CreateKnobControlled,
} from './CreateKnobControlled';
import { memoizedStateQueries } from 'redux/StateQueries';

const mapStateToProps =
  (state) => {
    const {
      nodes,
    } = state.nodeManagement;
    const nodesThatHaveInputs =
      memoizedStateQueries.getNodesThatHaveKnobableInputs(state);
    return {
      nodes,
      nodesThatHaveInputs,
    };
  };

export const CreateKnobRedux =
  connect(
    mapStateToProps,
    {},
  )(CreateKnobControlled);