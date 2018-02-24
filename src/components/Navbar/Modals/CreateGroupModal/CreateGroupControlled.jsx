import React from 'react';
import { CreateGroupDumb } from './CreateGroupDumb';
import { createGroupAction } from 'redux/modules/group';

export class CreateGroupControlled extends React.Component {
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
    onConfirm:
      () =>
        createGroupAction({
          ...this.state,
        }),
    onNameChange:
      value =>
        this.setState({
          name: value,
        }),
    onOtherNodesChange:
      (e, { value }) => {
        const otherNodes =
          value.map(val => parseInt(val));
        this.setState({ otherNodes });
      },
    onInputNodeChange:
      (e, { value }) => {
        const inputNode = parseInt(value);
        this.setState({ inputNode });
      },
    onOutputNodeChange:
      (e, { value }) => {
        const outputNode = parseInt(value);
        this.setState({ outputNode });
      },
  }

  render =
    () => (
      <CreateGroupDumb
        {...this.props}
        {...this.state}
        {...this.handlers}
      />
    );
}
