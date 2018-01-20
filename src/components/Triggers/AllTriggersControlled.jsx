import React from 'react';
import {
  SimpleWindowRedux,
} from '../SimpleWindow';
import {
  TriggerControlled,
} from './TriggerControlled';

export const AllTriggersControlled =
  (props) => {
    const triggerElements =
      Object.values(props.triggers).map(t =>
        <TriggerControlled trigger={t} />);

    if (triggerElements.length < 1) {
      return null;
    }

    return (
      <SimpleWindowRedux title="Triggers">
        {triggerElements}
      </SimpleWindowRedux>
    );
  };
