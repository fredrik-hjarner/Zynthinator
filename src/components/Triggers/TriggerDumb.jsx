import React from 'react';
import {
  Button,
} from 'semantic-ui-react';

export const TriggerDumb =
  props => (
    <div>
      <p>[{props.trigger.id}] {props.trigger.name}</p>
      <Button
        onClick={props.onTriggerClick}
      >
        Trigger {props.trigger.name}!
      </Button>
    </div>
  );
