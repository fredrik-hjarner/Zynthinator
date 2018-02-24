import React from 'react';
import * as Modals from 'components/Navbar/Modals';
import { connect } from 'react-redux';

const ModalWindow =
  (props) => {
    if (props.modal !== null) {
      const cls = Modals[props.modal];
      return React.createElement(
        cls,
        props.propsToModal,
      );
    }
    return null;
  };

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

const ModalWindowRedux =
  connect(
    mapStateToProps,
    {},
  )(ModalWindow);

export { ModalWindowRedux as ModalWindow };