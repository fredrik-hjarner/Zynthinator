import React from 'react';
import { SimpleWindowRedux } from 'components/SimpleWindow';
import { Knob } from './Knob';
import { connect } from 'react-redux';

const AllKnobs =
  (props) => {
    const knobElements =
      Object.values(props.knobs).map(k =>
        <Knob knob={k} />);

    if (knobElements.length < 1) {
      return null;
    }

    return (
      <SimpleWindowRedux title="Knobs">
        {knobElements}
      </SimpleWindowRedux>
    );
  };

// ----------------------
// Redux
// ----------------------

const mapStateToProps = (state) => {
  const {
    knobs,
  } = state.nodeManagement;
  return {
    knobs,
  };
};

const AllKnobsRedux = connect(
  mapStateToProps,
  {},
)(AllKnobs);

export { AllKnobsRedux as AllKnobs };
