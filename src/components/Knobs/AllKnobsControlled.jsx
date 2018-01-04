import React from 'react';
import {
  SimpleWindowRedux,
} from '../SimpleWindow';
import {
  KnobControlled,
} from './KnobControlled';

export const AllKnobsControlled =
  (props) => {
    const knobElements =
      Object.values(props.knobs).map(k =>
        <KnobControlled knob={k} />);
    return (
      <SimpleWindowRedux title="Knobs">
        {knobElements}
      </SimpleWindowRedux>
    );
  };
