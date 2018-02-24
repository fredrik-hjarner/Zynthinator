import React from 'react';
import { clickTriggerAction } from 'redux/modules/trigger';
import { Button } from 'semantic-ui-react';

const Trigger = props => (
  <div>
    <p>[{props.trigger.id}] {props.trigger.name}</p>
    <Button onClick={props.onTriggerClick}>
      Trigger {props.trigger.name}!
    </Button>
  </div>
);

class TriggerControlled extends React.Component {
  state = {
    value: undefined,
    displayValue: undefined,
  }

  handlers = {
    onTriggerClick: () => clickTriggerAction(this.props.trigger.id),
  }

  render = () => (
    <Trigger
      {...this.state}
      {...this.props}
      {...this.handlers}
    />
  )
}

export { TriggerControlled as Trigger };
