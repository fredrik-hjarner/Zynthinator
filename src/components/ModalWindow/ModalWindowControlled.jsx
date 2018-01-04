import React from 'react';
import * as Modals from '../Navbar/Modals'; // eslint-disable-line

export const ModalWindowControlled =
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
