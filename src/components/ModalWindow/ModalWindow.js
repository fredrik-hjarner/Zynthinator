/**
 * This is specifically the modal that is displayed when creating 
 */
import React from 'react';
import * as Modals from 'components/Navbar/Modals';
import { connect } from 'react-redux';

const ModalWindow = (props) => {
  if (props.modal === null) {
    return null;
  }
  const cls = Modals[props.modal];
  if (cls === undefined) {
    debugger;
  }
  return React.createElement(
    cls,
    props.propsToModal,
  );
};

const mapStateToProps = (state) => {
  const { modal, propsToModal } = state;
  return {
    modal,
    propsToModal,
  };
};

const ModalWindowRedux = connect(mapStateToProps)(ModalWindow);

export { ModalWindowRedux as ModalWindow }; // todo ugly
