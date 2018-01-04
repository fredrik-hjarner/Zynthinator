import {
  connect,
} from 'react-redux';
import {
// changeMasterVolumeAction,
} from '../../redux';
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

const mapDispatchToProps =
  () => ({
    /* onMasterVolumeChange:
      () =>
        changeMasterVolumeAction(), */
  });

export const SimpleWindowRedux =
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SimpleWindowControlled);

