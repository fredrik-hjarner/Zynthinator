import {
  connect,
} from 'react-redux';
import {
// stateQueries,
} from '../../redux';
import {
  ListOfGroupsDumb,
} from './ListOfGroupsDumb';

const mapStateToProps =
  (state) => {
    const {
      nodes,
      groups,
    } = state.nodeManagement;

    return {
      nodes,
      groups,
    };
  };

export const ListOfGroupsRedux =
  connect(
    mapStateToProps,
    {},
  )(ListOfGroupsDumb);
