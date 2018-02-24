import React from 'react';
import { InjectNodeDumb } from './InjectNodeDumb';
import { injectNodeAction } from 'redux/Actions';

export class InjectNodeControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeId: null,
      connectionId: null,
    };
  }

  handlers = {
    onConfirm:
      () =>
        injectNodeAction(this.state.nodeId, this.state.connectionId),
    onConnectionIdChange:
      (e, { value }) =>
        this.setState({
          connectionId: parseInt(value, 10), // todo this is stupid. should use 'name'
          // instead because onConnectionIdChange and onNodeIdChange are just duplicated.
        }),
    onNodeIdChange:
      (e, { value }) =>
        this.setState({
          nodeId: parseInt(value, 10),
        }),
  }

  render =
    () => {
      const {
        connectionsInReadableFormat,
        allNodesInReadableFormat,
      } = this.props;

      const nodeOptions =
        Object.entries(allNodesInReadableFormat)
          .map(([id, nodeAsString]) => ({
            text: nodeAsString,
            value: id,
          }))
          .filter(option => option.value != 1); // eslint-disable-line
      // todo hack above! Speakers have id == 1.

      return (
        <InjectNodeDumb
          {...this.handlers}
          options={connectionsInReadableFormat}
          nodeOptions={nodeOptions}
          {...this.state}
        />
      );
    };
}
