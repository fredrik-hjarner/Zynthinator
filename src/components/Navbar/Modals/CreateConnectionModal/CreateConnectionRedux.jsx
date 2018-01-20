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
          key: node.id,
        })),
    nodesThatHaveInputs:
      memoizedStateQueries.getChildNodesForCreateConnectionModal(state),
    ...ownProps,
  });

export const CreateConnectionRedux =
  connect(
    mapStateToProps,
    {},
  )(CreateConnectionControlled);
