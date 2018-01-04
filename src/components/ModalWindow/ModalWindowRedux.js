import {
  connect,
} from 'react-redux';
import {
  ModalWindowControlled,
} from './ModalWindowControlled';

const mapStateToProps =
  (state) => {
    const {
      modal,
      propsToModal,
    } = state;
    return {
      modal,
      propsToModal,
    };
  };

export const ModalWindowRedux =
  connect(
    mapStateToProps,
    {},
  )(ModalWindowControlled);
