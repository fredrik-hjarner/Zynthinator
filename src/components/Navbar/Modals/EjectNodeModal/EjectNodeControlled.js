import React from 'react';
import { EjectNodeDumb } from './EjectNodeDumb';
import { ejectNodeAction } from 'redux/modules/connection';
import { connect } from 'react-redux';
import { memoizedStateQueries } from 'redux/StateQueries';
import { getAllNodes } from 'redux/StateQueries/new-state-queries/node-queries';

const mapStateToProps = (state, ownProps) => ({
  allNodesInReadableFormat: memoizedStateQueries.getAllNodesInReadableFormat(state),
  nodes: getAllNodes(state),
  ...ownProps, // todo. this actually does nothing I believe.
});

@connect(mapStateToProps)
export class EjectNodeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeId: null,
    };
  }

  handlers = {
    onConfirm: () => ejectNodeAction(this.state.nodeId),
    onNodeIdChange: (e, { value }) =>
      this.setState({
        nodeId: parseInt(value, 10),
      }),
  }

  render = () => {
    const { allNodesInReadableFormat } = this.props;

    const nodeOptions =
      Object.entries(allNodesInReadableFormat)
        .map(([id, nodeAsString]) => ({
          text: nodeAsString,
          value: id,
        }))
        .filter(option => option.value != 1); // eslint-disable-line
    // todo hack above! Speakers have id == 1.

    return (
      <EjectNodeDumb
        {...this.handlers}
        nodeOptions={nodeOptions}
        {...this.state}
      />
    );
  };
}
