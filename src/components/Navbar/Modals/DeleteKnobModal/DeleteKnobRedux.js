import {
  connect,
} from 'react-redux';
import {
  DeleteKnobControlled,
} from './DeleteKnobControlled';

const mapStateToProps =
  (state, ownProps) => {
    const {
      knobs,
    } = state.nodeManagement;
    return {
      knobs,
      ...ownProps,
    };
  };

export const DeleteKnobRedux =
  connect(
    mapStateToProps,
    {},
  )(DeleteKnobControlled);
