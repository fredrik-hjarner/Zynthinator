/**
 * Node
 * is a component for a single Node that is
 * meant to be drawn EVERYWHERE a node is
 * to be displayed. 
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Popup,
  // Menu,
  // Dropdown,
  Divider
} from 'semantic-ui-react';
import { deleteNodeAction } from 'redux/Actions';
import {
  stateQueries,
} from 'redux/StateQueries';
import {
  ContextMenu,
  ContextMenuItem,
  TopContextMenuItem
} from 'components/semantic++';
import { nodeTypeDefinitions } from '../../NodeTypeDefinitions';
import './style.sass';

// ----------------------------------
// Node
// ----------------------------------

const Node =
  ({ node, display, deleteNode }) => { // eslint-disable-line
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
     * Trying to use my new ContextMenu class
     */
    return (
      <Popup
        className="context-menu"
        basic
        size="mini"
        trigger={div}
        content={(
          <ContextMenu>
            <TopContextMenuItem caption="Parameters" disabled="disabled">
              <ContextMenuItem caption=".gain = 1.0">
                <ContextMenuItem caption="Create knob for this" />
                <ContextMenuItem caption="Create trigger for this" />
              </ContextMenuItem>
              <Divider />
              <ContextMenuItem caption="Show node as raw json-data" />
            </TopContextMenuItem>
            <ContextMenuItem caption="Edit" disabled="disabled" />
            <TopContextMenuItem caption="Connect" disabled="disabled">
              <ContextMenuItem caption="Connect" />
              <ContextMenuItem caption="Inject" />
              <ContextMenuItem caption="Eject" />
            </TopContextMenuItem>
            <ContextMenuItem caption="Delete" onClick={deleteNode} />
          </ContextMenu>
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
