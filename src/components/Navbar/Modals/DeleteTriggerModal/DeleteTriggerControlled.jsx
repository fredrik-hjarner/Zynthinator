import React from 'react';
import * as R from 'ramda';
import { DeleteTriggerDumb } from './DeleteTriggerDumb';
import { deleteTriggerAction } from 'redux/Actions';

export class DeleteTriggerControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      triggerIds: [],
    };
  }

  handlers = {
    onConfirm:
      () =>
        deleteTriggerAction(this.state.triggerIds),
    onTriggerIdChange:
      (e, { value }) => {
        this.setState({ triggerIds: R.map(parseInt, value) });
      },
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
          {...this.handlers}
          options={options}
        />
      );
    };
}
