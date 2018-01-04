import {
  connect,
} from 'react-redux';
import {
  CreateConnectionControlled,
} from './CreateConnectionControlled';
import {
  memoizedStateQueries,
  stateQueries,
} from '../commonImports';

const mapStateToProps =
  (state, ownProps) => ({
    nodes:
      stateQueries.getAllNodes(state),
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
    ...ownProps,
  });

export const CreateConnectionRedux =
  connect(
    mapStateToProps,
    {},
  )(CreateConnectionControlled);
