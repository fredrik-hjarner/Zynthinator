import React from 'react';
import { CreateConnectionDumb } from './CreateConnectionDumb';
import { createConnectionAction } from 'redux/modules/connection';
import { connect } from 'react-redux';
import {
  memoizedStateQueries,
  stateQueries
} from 'redux/StateQueries';

const mapStateToProps = (state, ownProps) => ({
  nodes: stateQueries.getAllNodes(state),
  nodesThatHaveOutputs:
    Object.values(memoizedStateQueries.getNodesThatHaveOutputs(state))
      .map(node => ({
        text: stateQueries.getNodeInReadableFormat(node),
        value: node.id,
        key: node.id,
      })),
  nodesThatHaveInputs: memoizedStateQueries.getChildNodesForCreateConnectionModal(state),
  ...ownProps,
});

@connect(mapStateToProps)
export class CreateConnectionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      parentNodeIds: [],
      /**
       * [
       *   { nodeId, param },
       *   { nodeId, param },
       * ]
       */
      childNodes: [],
    };
  }

  handlers = {
    onConfirm: () => createConnectionAction(this.state),
    /**
     * Receives many ids as an array via 'value'.
     */
    onParentNodeIdChange: (e, { value }) => {
      this.setState({ parentNodeIds: value });
    },
    /**
     * Receives value =
     * [
     *   { nodeId, param },
     *   { nodeId, param },
     * ]
     */
    onChildNodeIdChange: (e, { value }) => {
      this.setState({ childNodes: value });
    }
  }

  render = () => (
    <CreateConnectionDumb
      {...this.props}
      {...this.state}
      {...this.handlers}
    />
  );
}
