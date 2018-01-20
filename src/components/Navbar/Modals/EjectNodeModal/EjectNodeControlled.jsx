import React from 'react';
// import * as R from 'ramda';
import { EjectNodeDumb } from './EjectNodeDumb';
import {
  ejectNodeAction,
} from '../commonImports';

export class EjectNodeControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeId: null,
    };
  }

  handlers = {
    onConfirm:
      () =>
        ejectNodeAction(this.state.nodeId),
    onNodeIdChange:
      (e, { value }) =>
        this.setState({
          nodeId: parseInt(value, 10),
        }),
  }

  render =
    () => {
      const {
        allNodesInReadableFormat,
      } = this.props;

      const nodeOptions =
        Object.entries(allNodesInReadableFormat)
          .map(([id, nodeAsString]) => ({
            text: nodeAsString,
            value: id,
          }))
          .filter(option => option.value != 1); // eslint-disable-line
      // todo hack above! Speakers have id == 1.

      return (
        <EjectNodeDumb
          {...this.handlers}
          nodeOptions={nodeOptions}
          {...this.state}
        />
      );
    };
}
