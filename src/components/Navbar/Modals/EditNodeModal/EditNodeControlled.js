import React from 'react';
import { EditNodeDumb } from './EditNodeDumb';
import { openModalAction } from 'redux/modules/ui';
import { connect } from 'react-redux';
import { memoizedStateQueries } from 'redux/StateQueries';
import { getAllNodes } from 'redux/StateQueries/new-state-queries/node-queries';

const mapStateToProps = state => ({
  allNodesInReadableFormat: memoizedStateQueries.getAllNodesInReadableFormat(state),
  nodes: getAllNodes(state),
});

@connect(mapStateToProps)
export class EditNodeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeId: 1, // todo. why 1 ???
    };
  }

  handlers = {
    onConfirm: () => {
      const node = this.props.nodes[this.state.nodeId];
      openModalAction('CreateNodeModal', {
        nodeType: node.nodeType,
        node,
      });
    },
    onNodeIdChange: nodeId => this.setState({ nodeId: parseInt(nodeId) })
  }

  render = () => {
    const { allNodesInReadableFormat } = this.props;
    const options =
      Object.entries(allNodesInReadableFormat)
        .map(([id, nodeAsString]) => ({
          text: nodeAsString,
          value: id,
        }))
        .filter(option => option.value != 1); // eslint-disable-line
    // todo hack above! Speakers have id == 1.

    return (
      <EditNodeDumb
        nodeId={this.state.nodeId.toString()}
        options={options}
        {...this.handlers}
      />
    );
  };
}
