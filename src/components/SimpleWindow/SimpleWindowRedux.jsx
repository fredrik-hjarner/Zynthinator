import {
  connect,
} from 'react-redux';
import {
  SimpleWindowControlled,
} from './SimpleWindowControlled';

const mapStateToProps =
  (state, ownProps) => {
    const {
      nodes,
    } = state.nodeManagement;

    return {
      nodes,
      ...ownProps,
    };
  };

export const SimpleWindowRedux =
  connect(
    mapStateToProps,
    null,
  )(SimpleWindowControlled);

