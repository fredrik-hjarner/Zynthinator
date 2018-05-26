import React from 'react';
import _ from 'lodash';
import { moveKnobAction } from 'redux/modules/knob';
import { linearToExponential, linearToLogarithmic } from 'helpers/mathHelpers';

const Knob = props => {
  const value = isNaN(props.displayValue) ? '' : _.round(props.displayValue, 2); // eslint-disable-line
  return (
    <div>
      {/* <p>[{props.knob.id}] {props.knob.name}</p> */}
      {/* <p>range: {props.knob.minValue} to {props.knob.maxValue}</p> */}
      <p>{value}</p>
      <input
        type="range"
        min={props.knob.minValue}
        max={props.knob.maxValue}
        step={props.knob.step}
        onChange={event => props.onKnobMove(parseFloat(event.target.value))}
      />
    </div>
  );
};

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
            linearToExponential(
              this.props.knob.minValue,
              this.props.knob.maxValue,
              value,
            );
          break;
        case 'logarithmic':
          // convert value to exponential range.
          displayValue = linearToLogarithmic(
            this.props.knob.minValue,
            this.props.knob.maxValue,
            value,
          );
          break;
        default:
          alert('Error: default case');
          debugger;
          throw 'Error: default case';
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

export { KnobControlled as Knob };
