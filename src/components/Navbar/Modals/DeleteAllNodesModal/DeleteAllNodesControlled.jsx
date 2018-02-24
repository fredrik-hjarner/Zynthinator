import React from 'react';
import { DeleteAllNodesDumb } from './DeleteAllNodesDumb';
import { deleteAllNodesAction } from 'redux/Actions';

export class DeleteAllNodesControlled extends React.Component {
  onConfirm =
    () =>
      deleteAllNodesAction();

  render =
    () => (
      <DeleteAllNodesDumb
        onConfirm={this.onConfirm}
      />
    );
}
