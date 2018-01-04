import React from 'react';

export const KnobDumb =
  props => (
    <div>
      <p>[{props.knob.id}] {props.knob.name}</p>
      <p>range: {props.knob.minValue} to {props.knob.maxValue}</p>
      <p>val: {props.displayValue}</p>
      <input
        type="range"
        min={props.knob.minValue}
        max={props.knob.maxValue}
        step="0.0001"
        onChange={event => props.onKnobMove(parseFloat(event.target.value))}
      />
    </div>
  );
