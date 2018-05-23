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
    console.warn(`Warning! '${props.modal}' is not a known Modal type.`);
    return null;
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
