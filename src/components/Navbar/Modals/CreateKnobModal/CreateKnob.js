import React from 'react';
import { connect } from 'react-redux';
import { createKnobAction } from 'redux/modules/knob';
import { stateQueries, memoizedStateQueries } from 'redux/StateQueries';
import { CreateKnobDumb } from './CreateKnobDumb';

const mapStateToProps = (state) => {
  const { nodes } = state.nodeManagement;
  const nodesThatHaveInputs =
    memoizedStateQueries.getNodesThatHaveKnobableInputs(state);
  return {
    nodes,
    nodesThatHaveInputs,
  };
};

@connect(mapStateToProps)
export class CreateKnobModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      connectedToWhichNode: undefined,
      connectedToWhichParam: undefined,
      minValue: 0,
      maxValue: 100,
      step: 0.01,
      childNodeInputs: [],
    };
  }

  handlers = {
    onConfirm: () => {
      const {
        childNodeInputs,
        ...rest
      } = this.state;
      createKnobAction({ ...rest });
    },
    onChildNodeIdChange: (e, { value }) => {
      const connectedToWhichNode = parseInt(value);
      this.setState({ connectedToWhichNode });
      // populate <select> with the inputs of this node
      const { nodes } = this.props;
      const node = nodes[value];
      const inputs =
        stateQueries.getKnobableInputsOfNode(node);
      this.setState({
        childNodeInputs: inputs.map(input => ({ text: input, value: input }))
      });
    },
    onNameChange: value =>
      this.setState({
        name: value,
      }),
    onFormStringChange: (e, { name, value }) => {
      this.setState({ [name]: value });
    },
    onFormFloatChange: (e) => {
      const {
        name,
        value,
      } = e.target;
      this.setState({ [name]: parseFloat(value) });
    },
  }

  render = () => {
    const moreProps = {
      nodesThatHaveInputsInReadableFormat:
        Object.values(this.props.nodesThatHaveInputs)
          .map(node => ({
            text: stateQueries.getNodeInReadableFormat(node),
            value: node.id,
          })),
      functionOptions: [
        { key: 'linear', value: 'linear', text: 'Linear' },
        { key: 'logarithmic', value: 'logarithmic', text: 'Logarithmic' },
        { key: 'exponential', value: 'exponential', text: 'Exponential' },
      ],
    };

    return (
      <CreateKnobDumb
        {...moreProps}
        {...this.props}
        {...this.state}
        {...this.handlers}
      />
    );
  };
}
