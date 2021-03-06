import React from 'react';
import * as R from 'ramda';
import { DeleteKnobDumb } from './DeleteKnobDumb';
import { deleteKnobAction } from 'redux/modules/knob';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const { knobs } = state.nodeManagement;
  return {
    knobs,
    ...ownProps,
  };
};

@connect(mapStateToProps)
export class DeleteKnobModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      knobIds: [],
    };
  }

  handlers = {
    onConfirm: () => deleteKnobAction(this.state.knobIds),
    onKnobIdChange: (e, { value }) => {
      this.setState({ knobIds: R.map(parseInt, value) });
    },
  }

  render = () => {
    const { knobs } = this.props;
    const options = Object.keys(knobs).map(id => ({
      key: id,
      text: id,
      value: id,
    }));

    return (
      <DeleteKnobDumb
        {...this.handlers}
        options={options}
      />
    );
  };
}
