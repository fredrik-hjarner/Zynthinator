import React from 'react';
import { CreateTriggerDumb } from './CreateTriggerDumb';
import { createTriggerAction } from 'redux/modules/trigger';
import { stateQueries, memoizedStateQueries } from 'redux/StateQueries';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { nodes } = state.nodeManagement;
  const nodesThatHaveInputs = memoizedStateQueries.getNodesForCreateTriggerModal(state);
  return {
    nodes,
    nodesThatHaveInputs,
  };
};

@connect(mapStateToProps)
export class CreateTriggerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      connectedToWhichNodes: [],
      // connectedToWhichNode: undefined,
      // connectedToWhichParam: undefined,
      // childNodeInputs: [],
    };
  }

  handlers = {
    onConfirm: () => createTriggerAction(this.state),
    /**
     * value is an array.
     */
    onChildNodeIdChange: (e, { value }) => this.setState({ connectedToWhichNodes: value }),
    onNameChange: value => this.setState({ name: value }),
    onFormStringChange: (e, { name, value }) => {
      this.setState({ [name]: value });
    },
  }

  render = () => {
    const moreProps = {
      nodesThatHaveInputsInReadableFormat:
        Object.values(this.props.nodesThatHaveInputs)
          .map(node => ({
            text: stateQueries.getNodeInReadableFormat(node),
            value: node.id
          })),
    };

    return (
      <CreateTriggerDumb
        {...moreProps}
        {...this.props}
        {...this.state}
        {...this.handlers}
      />
    );
  };
}
