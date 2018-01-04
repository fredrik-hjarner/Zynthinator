import {
  connect,
} from 'react-redux';
import {
  DeleteTriggerControlled,
} from './DeleteTriggerControlled';

const mapStateToProps =
  (state, ownProps) => {
    const {
      triggers,
    } = state.nodeManagement;
    return {
      triggers,
      ...ownProps,
    };
  };

export const DeleteTriggerRedux =
  connect(
    mapStateToProps,
    {},
  )(DeleteTriggerControlled);
