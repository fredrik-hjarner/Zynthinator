/**
 * ConnectionArrow
 * is a component for a single Connection that is
 * meant to be drawn EVERYWHERE a connection is
 * to be displayed. 
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Popup,
  Divider
} from 'semantic-ui-react';
import { openModalAction } from 'redux/Actions';
import {
  stateQueries,
} from 'redux/StateQueries';
import {
  ContextMenu,
  ContextMenuItem,
  TopContextMenuItem
} from 'components/semantic++';
import './style.sass';

// ----------------------------------
// ConnectionArrow
// ----------------------------------

class ConnectionArrow extends React.Component {
  state = {
    open: false
  }

  handleClose = () => {
    this.setState({ open: false });
  }
  
  handleOpen = () => {
    this.setState({ open: true });
  }

  render =
    () => {
      const { node, display } = this.props;

      const div = (
        <div style={{ display, backgroundColor }} className="node">
          {`${stateQueries.getNodeInReadableFormat(node)}`}
        </div>
      );

      /**
       * Trying to use my new ContextMenu class
       */
      return (
        <Popup
          open={this.state.open}
          onOpen={this.handleOpen}
          onClose={this.handleClose}
          className="context-menu"
          basic
          size="mini"
          trigger={div}
          content={(
            <ContextMenu>
              <ContextMenuItem caption="Disable" />
            </ContextMenu>
          )}
          position="bottom right"
          on="click"
        />
      );
    };
}
  

ConnectionArrow.propTypes = {
  node: PropTypes.object.isRequired,
  display: PropTypes.string.isRequired
};

// ----------------------------------
// ConnectionArrowContainer
// ----------------------------------

const mapStateToProps =
  (state, { nodeId }) => ({
    node:
      stateQueries.getAllNodes(state)[nodeId]
  });

const mapDispatchToProps =
  (dispatch, { nodeId }) => ({ // eslint-disable-line
    // deleteNode: () => deleteNodeAction([nodeId])
  });

const ConnectionArrowContainer =
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConnectionArrow);

ConnectionArrowContainer.propTypes = {
  nodeId: PropTypes.number.isRequired,
  display: PropTypes.string.isRequired
};

export { ConnectionArrowContainer as ConnectionArrow };
