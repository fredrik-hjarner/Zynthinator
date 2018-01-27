/**
 * Node
 * is a component for a single Node that is
 * meant to be drawn EVERYWHERE a node is
 * to be displayed. 
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Popup, Menu } from 'semantic-ui-react';
import { deleteNodeAction } from 'redux/Actions';
import {
  stateQueries,
} from '../../redux';
import { nodeTypeDefinitions } from '../../NodeTypeDefinitions';
import './style.sass';

// ----------------------------------
// Node
// ----------------------------------

const Node =
  ({ node, display, deleteNode }) => {
    const backgroundColor =
      nodeTypeDefinitions[node.nodeType].ui.color;

    const div = (
      <div style={{ display, backgroundColor }} className="node">
        {`${stateQueries.getNodeInReadableFormat(node)}`}
      </div>
    );

    /**
     * Simply displays node POJO.
     */
    // return (
    //   <Popup
    //     size="tiny"
    //     trigger={div}
    //     content={(
    //       <pre>{JSON.stringify(node, null, 2).slice(2, -2)}</pre>
    //     )}
    //     position="top center"
    //     on="click"
    //     hoverable="false"
    //   />
    // );

    /**
     * Trying to make a simple context menu.
     */
    return (
      <Popup
        className="context-menu"
        basic
        size="mini"
        trigger={div}
        content={(
          <Menu size="tiny" vertical compact>
            <Menu.Item className="link">
              Show JSON
            </Menu.Item>
            <Menu.Item className="link">
              Inspect
            </Menu.Item>
            <Menu.Item className="link">
              Edit
            </Menu.Item>
            <Menu.Item className="link">
              Connect
            </Menu.Item>
            <Menu.Item className="link" onClick={deleteNode}>
              Delete
            </Menu.Item>
          </Menu>
        )}
        position="bottom right"
        on="click"
      />
    );
  };

Node.propTypes = {
  node: PropTypes.object.isRequired,
  display: PropTypes.string.isRequired,
  deleteNode: PropTypes.func.isRequired
};

// ----------------------------------
// NodeContainer
// ----------------------------------

const mapStateToProps =
  (state, { nodeId }) => ({
    node:
      stateQueries.getAllNodes(state)[nodeId]
  });

const mapDispatchToProps =
  (dispatch, { nodeId }) => ({
    deleteNode: () => deleteNodeAction([nodeId])
  });

const NodeContainer =
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Node);

NodeContainer.propTypes = {
  nodeId: PropTypes.number.isRequired,
  display: PropTypes.string.isRequired
};

export { NodeContainer as Node };
