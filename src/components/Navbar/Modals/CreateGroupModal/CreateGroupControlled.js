import React from 'react';
import { CreateGroupDumb } from './CreateGroupDumb';
import { createGroupAction } from 'redux/modules/group';
import { connect } from 'react-redux';
import {
  stateQueries,
  memoizedStateQueries
} from 'redux/StateQueries';
import { getAllNodes } from 'redux/StateQueries/new-state-queries/node-queries';

const mapStateToProps = (state, ownProps) => ({
  nodesThatHaveOutputs: Object.values(memoizedStateQueries.getNodesThatHaveOutputs(state))
    .map(node => ({
      text: stateQueries.getNodeInReadableFormat(node),
      value: node.id,
    })),
  nodesThatHaveInputs: Object.values(memoizedStateQueries.getNodesThatHaveConnectableInputs(state))
    .map(node => ({
      text: stateQueries.getNodeInReadableFormat(node),
      value: node.id,
    })),
  options: Object.values(getAllNodes(state))
    .map(node => ({
      text: stateQueries.getNodeInReadableFormat(node),
      value: node.id,
    })),
  ...ownProps,
});

@connect(mapStateToProps)
export class CreateGroupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNode: null,
      outputNode: null,
      otherNodes: [],
      name: '',
    };
  }

  handlers = {
    onConfirm: () =>
      createGroupAction({
        ...this.state,
      }),
    onNameChange: value =>
      this.setState({
        name: value,
      }),
    onOtherNodesChange: (e, { value }) => {
      const otherNodes =
        value.map(val => parseInt(val));
      this.setState({ otherNodes });
    },
    onInputNodeChange: (e, { value }) => {
      const inputNode = parseInt(value);
      this.setState({ inputNode });
    },
    onOutputNodeChange: (e, { value }) => {
      const outputNode = parseInt(value);
      this.setState({ outputNode });
    }
  }

  render = () => (
    <CreateGroupDumb
      {...this.props}
      {...this.state}
      {...this.handlers}
    />
  );
}
