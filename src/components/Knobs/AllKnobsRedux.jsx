import {
  connect,
} from 'react-redux';
import {
  AllKnobsControlled,
} from './AllKnobsControlled';

const mapStateToProps =
  (state) => {
    const {
      knobs,
    } = state.nodeManagement;
    return {
      knobs,
    };
  };

export const AllKnobsRedux =
  connect(
    mapStateToProps,
    {},
  )(AllKnobsControlled);
