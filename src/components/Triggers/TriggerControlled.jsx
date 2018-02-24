import React from 'react';
import {
  TriggerDumb,
} from './TriggerDumb';
import * as Actions from 'redux/Actions';

export class TriggerControlled extends React.Component {
  state = {
    value: undefined,
    displayValue: undefined,
  }

  handlers = {
    onTriggerClick:
      () =>
        Actions.clickTriggerAction(this.props.trigger.id),
  }

  render =
    () => (
      <TriggerDumb
        {...this.state}
        {...this.props}
        {...this.handlers}
      />
    )
}
