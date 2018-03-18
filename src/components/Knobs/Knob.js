import React from 'react';
import { moveKnobAction } from 'redux/modules/knob';
import { mathHelpers } from 'helpers';

const Knob = props => (
  <div>
    <p>[{props.knob.id}] {props.knob.name}</p>
    <p>range: {props.knob.minValue} to {props.knob.maxValue}</p>
    <p>val: {props.displayValue}</p>
    <input
      type="range"
      min={props.knob.minValue}
      max={props.knob.maxValue}
      step={props.knob.step}
      onChange={event => props.onKnobMove(parseFloat(event.target.value))}
    />
  </div>
);

class KnobControlled extends React.Component {
  state = {
    value: undefined,
    displayValue: undefined,
  }

  handlers = {
    onKnobMove: (value) => {
      const { knob } = this.props;
      let displayValue;
      switch (knob.function) {
        case 'linear':
          // do nothing
          displayValue = value;
          break;
        case 'exponential':
          // convert value to exponential range.
          displayValue =
            mathHelpers.linearToExponential(
              this.props.knob.minValue,
              this.props.knob.maxValue,
              value,
            );
          break;
        case 'logarithmic':
          // convert value to exponential range.
          displayValue = mathHelpers.linearToLogarithmic(
            this.props.knob.minValue,
            this.props.knob.maxValue,
            value,
          );
          break;
        default:
          alert('Error');
          debugger;
      }
      this.setState({
        value,
        displayValue,
      });
      moveKnobAction(this.props.knob.id, displayValue);
    },
  }

  render = () => (
    <Knob
      {...this.state}
      {...this.props}
      {...this.handlers}
    />
  )
}

/*
  loudnessToGain =
    loudness =>
      10 ** (Math.log(loudness) / Math.log(2));
  gainToLoudness =
    gain =>
      0.5 ** (Math.log(gain) / Math.log(0.1));
*/

export { KnobControlled as Knob };
