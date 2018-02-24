import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import * as Actions from 'redux/Actions';

export class BestModal extends React.Component {
  render =
    () => { // eslint-disable-line
      return (
        <Modal
          closeOnDimmerClick={false}
          basic
          open="true"
          onClose={this.onModalClose}
          size="mini"
        >
          <Header icon="archive" content={this.props.header} />
          <Modal.Content>
            <Modal.Description>
              <p>{this.props.description}</p>
              {this.props.form}
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              basic
              color="red"
              inverted
              onClick={() => Actions.closeModalAction()}
            >
              <Icon name="remove" /> Cancel
            </Button>
            <Button
              color="green"
              inverted
              onClick={() => {
                  Actions.closeModalAction();
                  this.props.onConfirm();
                }}
            >
              <Icon name="checkmark" /> {this.props.okButtonString}
            </Button>
          </Modal.Actions>
        </Modal>
      );
    }
}

BestModal.propTypes = {
  onConfirm:
    PropTypes.any.isRequired,
  header:
    PropTypes.any.isRequired,
  description:
    PropTypes.any.isRequired,
  form:
    PropTypes.any.isRequired,
  okButtonString:
    PropTypes.any.isRequired,
};
