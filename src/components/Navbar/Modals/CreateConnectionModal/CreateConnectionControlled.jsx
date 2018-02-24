import React from 'react';
import { CreateConnectionDumb } from './CreateConnectionDumb';
import {
  createConnectionAction,
} from 'redux/Actions';

export class CreateConnectionControlled extends React.Component {
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
    onConfirm:
      () =>
        createConnectionAction(this.state),
    /**
     * Receives many ids as an array via 'value'.
     */
    onParentNodeIdChange:
      (e, { value }) => {
        this.setState({ parentNodeIds: value });
      },
    /**
     * Receives value =
     * [
     *   { nodeId, param },
     *   { nodeId, param },
     * ]
     */
    onChildNodeIdChange:
      (e, { value }) => {
        this.setState({ childNodes: value });
      },
    onNameChange:
      value =>
        this.setState({
          name: value,
        }),
  }

  render =
    () => (
      <CreateConnectionDumb
        {...this.props}
        {...this.state}
        {...this.handlers}
      />
    );
}
