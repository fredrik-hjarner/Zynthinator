import React from 'react';
import { DeleteKnobDumb } from './DeleteKnobDumb';
import {
  deleteKnobAction,
  // stateQueries,
} from '../commonImports';

export class DeleteKnobControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      knobId: 1,
    };
  }

  handlers = {
    onConfirm:
      () =>
        deleteKnobAction(this.state.knobId),
    onKnobIdChange:
      knobId =>
        this.setState({
          knobId: parseInt(knobId),
        }),
  }

  render =
    () => {
      const {
        knobs,
      } = this.props;
      const options =
        Object.keys(knobs)
          .map(id => ({
            key: id,
            text: id,
            value: id,
          }));

      return (
        <DeleteKnobDumb
          knobId={this.state.knobId.toString()}
          {...this.handlers}
          options={options}
        />
      );
    };
}
