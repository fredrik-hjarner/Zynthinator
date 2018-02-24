import React from 'react';
import {
  TriggerDumb,
} from './TriggerDumb';
import { clickTriggerAction } from 'redux/modules/trigger';

export class TriggerControlled extends React.Component {
  state = {
    value: undefined,
    displayValue: undefined,
  }

  handlers = {
    onTriggerClick:
      () =>
        clickTriggerAction(this.props.trigger.id),
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
