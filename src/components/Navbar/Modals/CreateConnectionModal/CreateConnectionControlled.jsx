import React from 'react';
import _ from 'lodash';
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
      parentNodeId: undefined,
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
    onParentNodeIdChange:
      (e, { value }) => {
        const parentNodeId = parseInt(value);
        this.setState({ parentNodeId });
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
