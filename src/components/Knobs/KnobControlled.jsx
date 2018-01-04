import React from 'react';
import {
  KnobDumb,
} from './KnobDumb';
import * as Actions from '../../redux';
import {
  mathHelpers,
} from '../../helpers';

export class KnobControlled extends React.Component {
  state = {
    value: undefined,
    displayValue: undefined,
  }

  handlers = {
    onKnobMove:
      (value) => {
        const {
          knob,
        } = this.props;
        let displayValue;
        switch (knob.function) {
          case 'linear':
            // do nothing
            displayValue = value;
            break;
          case 'exponential':
            // convert value to exponential range.
            displayValue =
              mathHelpers.linearToExponentialAnyScale(
                this.props.knob.minValue,
                this.props.knob.maxValue,
                value,
              );
            break;
          case 'logarithmic':
            // convert value to exponential range.
            displayValue = mathHelpers.linearToLogarithmic(value);
            break;
          default:
            alert('Error');
            debugger;
        }
        this.setState({
          value,
          displayValue,
        });
        Actions.moveKnobAction(this.props.knob.id, displayValue);
      },
  }

  render =
    () => (
      <KnobDumb
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
