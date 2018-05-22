import React from 'react';
import { connect } from 'react-redux';
import { createKnobAction } from 'redux/modules/knob';
import {
  memoizedStateQueries
} from 'redux/StateQueries';
import { CreateKnobDumb } from './CreateKnobDumb';

const mapStateToProps = (state) => {
  const { nodes } = state.nodeManagement;
  const nodesThatHaveInputs = memoizedStateQueries.getChildNodesForCreateKnobModal(state);
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
      func: 'linear',
      minValue: 0,
      maxValue: 100,
      step: 0.01,
    };
  }

  handlers = {
    onConfirm: () => createKnobAction(this.state),
    onNameChange: value => this.setState({ name: value }),
    onFormStringChange: (e, { name, value }) => this.setState({ [name]: value }),
    onFormFloatChange: (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: parseFloat(value) });
    },
  }

  render = () => {
    const moreProps = {
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
