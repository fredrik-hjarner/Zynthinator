import {
  connect,
} from 'react-redux';
import {
  CreateGroupControlled,
} from './CreateGroupControlled';
import {
  stateQueries,
  memoizedStateQueries,
} from 'redux/StateQueries';

const mapStateToProps =
  (state, ownProps) => ({
    nodesThatHaveOutputs:
      Object.values(memoizedStateQueries.getNodesThatHaveOutputs(state))
        .map(node => ({
          text: stateQueries.getNodeInReadableFormat(node),
          value: node.id,
        })),
    nodesThatHaveInputs:
      Object.values(memoizedStateQueries.getNodesThatHaveConnectableInputs(state))
        .map(node => ({
          text: stateQueries.getNodeInReadableFormat(node),
          value: node.id,
        })),
    options:
      Object.values(stateQueries.getAllNodes(state))
        .map(node => ({
          text:
            stateQueries.getNodeInReadableFormat(node),
          value:
            node.id,
        })),
    ...ownProps,
  });

export const CreateGroupRedux =
  connect(
    mapStateToProps,
    {},
  )(CreateGroupControlled);
