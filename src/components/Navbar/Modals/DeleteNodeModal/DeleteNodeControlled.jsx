import React from 'react';
import { DeleteNodeDumb } from './DeleteNodeDumb';
import {
  deleteNodeAction,
} from '../commonImports';

export class DeleteNodeControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeId: 1,
    };
  }

  onConfirm =
    () =>
      deleteNodeAction(this.state.nodeId);
  handleNodeIdChange =
    nodeId =>
      this.setState({
        nodeId: parseInt(nodeId),
      });

  render = () => {
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
    // todo hack above! Speakers have id == 1.

    return (
      <DeleteNodeDumb
        onNodeIdChange={this.handleNodeIdChange}
        nodeId={this.state.nodeId.toString()}
        onConfirm={this.onConfirm}
        options={options}
      />
    );
  };
}
