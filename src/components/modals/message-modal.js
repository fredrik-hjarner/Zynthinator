import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { closeModalAction } from 'redux/modules/ui';
import './modal.sass';

/**
 * A simple warning modal that essentially mimics the
 * behaviour of window.alert.
 */
const MessageModal = ({ modal }) => {
  if (!modal) {
    /**
     * modal === null means that there is no modal
     * so don't draw it.
     */
    return null;
  }

  return (
    <Modal open size='tiny' className='modal-body' dimmer="blurring">
      <Icon color={modal.color} name={modal.icon} size='massive'/>
      <h2>{modal.header}</h2>
      <div className='modal-content-text'>{modal.content}</div>
      <Button
        color={modal.color}
        inverted
        onClick={closeModalAction}
        size='big'
      >
        Ok
      </Button>
    </Modal>
  );
};

MessageModal.propTypes = {
  modal: PropTypes.object,
  // color: PropTypes.string,
  // icon: PropTypes.string,
};

// MessageModal.defaultProps = {
//   color: 'red',
//   icon: 'warning circle'
// };

// ---------------------------------
// MessageModalContainer
// ---------------------------------

const mapStateToProps = state => ({
  modal: state.ui.messageModal
});

const MessageModalContainer = connect(mapStateToProps)(MessageModal);

export { MessageModalContainer as MessageModal };
