import React from 'react';
import _ from 'lodash';
import * as R from 'ramda';
import { CreateConnectionDumb } from './CreateConnectionDumb';
import {
  createConnectionAction,
  stateQueries,
} from '../commonImports';

export class CreateConnectionControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      parentNodeIds: [],
      childNodeId: undefined,
      childNodeInput: undefined,
      childNodeInputs: [],
    };
  }

  handlers = {
    onConfirm:
      () =>
        createConnectionAction({
          ...(_.omit(this.state, 'childNodeInputs')),
        }),
    /**
     * Receives many ids as an array via 'value'.
     */
    onParentNodeIdChange:
      (e, { value }) => {
        const parentNodeIds =
          R.map(x => parseInt(x, 10), value);
        this.setState({ parentNodeIds });
      },
    onChildNodeIdChange:
      (e, { value }) => {
        const childNodeId = parseInt(value);
        this.setState({ childNodeId });
        // populate <select> with the inputs of this node
        const {
          nodes,
        } = this.props;
        const node =
          nodes[value];
        const inputs =
          stateQueries.getConnectableInputsOfNode(node);
        this.setState({ childNodeInputs: inputs.map(input => ({ text: input, value: input })) });
      },
    onChildNodeInputChange:
      (e, { value }) => {
        this.setState({ childNodeInput: value });
        // this.state.childNodeInput = value;
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
