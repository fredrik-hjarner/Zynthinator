import React from 'react';
import { DeleteAllNodesDumb } from './DeleteAllNodesDumb';
import { deleteAllNodesAction } from 'redux/modules/node';

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
