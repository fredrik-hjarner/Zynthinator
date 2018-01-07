import React from 'react';
import { DeleteNodeDumb } from './DeleteNodeDumb';
import {
  deleteNodeAction,
} from '../commonImports';

export class DeleteNodeControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // nodeId: 1,
      nodes: [],
    };
  }

  onConfirm =
    () =>
      deleteNodeAction(this.state.nodes);

  handleNodeIdChange =
    (e, { value }) => {
      this.setState({ nodes: value });
    }

  render =
    () => {
      const {
        allNodesInReadableFormat,
      } = this.props;
      const options =
        Object.entries(allNodesInReadableFormat)
          .map(([id, nodeAsString]) => ({
            text: nodeAsString,
            value: id,
          }))
          .filter(option => option.value != 1); // eslint-disable-line
      // hack above! Speakers have id == 1.

      return (
        <DeleteNodeDumb
          onNodeIdChange={this.handleNodeIdChange}
          onConfirm={this.onConfirm}
          options={options}
        />
      );
    };
}
