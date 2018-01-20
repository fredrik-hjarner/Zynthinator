import React from 'react';
import * as R from 'ramda';
import { DeleteConnectionDumb } from './DeleteConnectionDumb';
import {
  deleteConnectionAction,
} from '../commonImports';

export class DeleteConnectionControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionIds: [],
    };
  }

  handlers = {
    onConfirm:
      () =>
        deleteConnectionAction(this.state.connectionIds),
    onConnectionIdChange:
      (e, { value }) => {
        this.setState({ connectionIds: R.map(parseInt, value) });
      },
  }

  render =
    () => {
      const {
        connectionsInReadableFormat,
      } = this.props;

      return (
        <DeleteConnectionDumb
          {...this.handlers}
          options={connectionsInReadableFormat}
        />
      );
    };
}
