import React from 'react';
import { DeleteTriggerDumb } from './DeleteTriggerDumb';
import {
  deleteTriggerAction,
  // stateQueries,
} from '../commonImports';

export class DeleteTriggerControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      triggerId: 1,
    };
  }

  handlers = {
    onConfirm:
      () =>
        deleteTriggerAction(this.state.triggerId),
    onTriggerIdChange:
      triggerId =>
        this.setState({
          triggerId: parseInt(triggerId),
        }),
  }

  render =
    () => {
      const {
        triggers,
      } = this.props;
      const options =
        Object.keys(triggers)
          .map(id => ({
            key: id,
            text: id,
            value: id,
          }));

      return (
        <DeleteTriggerDumb
          triggerId={this.state.triggerId.toString()}
          {...this.handlers}
          options={options}
        />
      );
    };
}
