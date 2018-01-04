import React from 'react';
import { DeleteConnectionDumb } from './DeleteConnectionDumb';
import {
  deleteConnectionAction,
} from '../commonImports';

export class DeleteConnectionControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionId: 1,
    };
  }

  onConfirm =
    () =>
      deleteConnectionAction({
        connectionId: this.state.connectionId,
      });
  handleConnectionIdChange =
    connectionId =>
      this.setState({
        connectionId: parseInt(connectionId),
      });

  render = () => {
    const {
      connectionsInReadableFormat,
    } = this.props;

    return (
      <DeleteConnectionDumb
        onConnectionIdChange={this.handleConnectionIdChange}
        connectionId={this.state.connectionId}
        onConfirm={this.onConfirm}
        connections={connectionsInReadableFormat}
      />
    );
  };
}
