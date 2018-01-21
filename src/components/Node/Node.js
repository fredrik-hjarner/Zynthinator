/**
 * Node
 * is a component for a single Node that is
 * meant to be drawn EVERYWHERE a node is
 * to be displayed. 
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';
import {
  stateQueries,
} from '../../redux';
import { nodeTypeDefinitions } from '../../NodeTypeDefinitions';
import './style.sass';

// ----------------------------------
// Node
// ----------------------------------

const Node =
  ({ node, display }) => {
    const backgroundColor =
      nodeTypeDefinitions[node.nodeType].ui.color;

    const div = (
      <div style={{ display, backgroundColor }} className="node">
        {`${stateQueries.getNodeInReadableFormat(node)}`}
      </div>
    );

    const popupContent = <pre>{JSON.stringify(node, null, 2).slice(2, -2)}</pre>;

    return (
      <Popup
        size="tiny"
        trigger={div}
        content={popupContent}
        position="top center"
        on="click"
        hoverable="false"
      />
    );
  };

Node.propTypes = {
  node: PropTypes.object.isRequired,
  display: PropTypes.string.isRequired
};

// ----------------------------------
// NodeContainer
// ----------------------------------

const mapStateToProps =
  (state, { nodeId }) => ({
    node:
      stateQueries.getAllNodes(state)[nodeId],
  });

const mapDispatchToProps =
  () => ({
    /* onMasterVolumeChange:
      () =>
        changeMasterVolumeAction(), */
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
