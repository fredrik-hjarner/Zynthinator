import React from 'react';
import * as Types from 'NodeTypeDefinitions';
import { CreateNodeDumb } from './CreateNodeDumb';
import {
  createNodeAction,
} from '../commonImports';

export class CreateNodeControlled extends React.Component {
  constructor(props) {
    super(props);
    /**
     * If the component is supplied a node then
     * we use the values of that node instead of
     * using default values.
     */
    if (props.node !== undefined) {
      const {

        type,
        ...params
      } = props.node;
      this.state = {
        ...params,
      };
    } else { // default values when creating a new node.
      this.state =
        Types.defaultValues(props.nodeType);
    }
  }

  handlers = {
    onConfirm:
      () =>
        createNodeAction({
          ...this.state,
          nodeType:
            this.props.nodeType,
        }),
    onFormChange:
      (e, { value, name }) => {
        if (value === undefined || name === undefined) {
          debugger;
        }
        this.setState({
          [name]:
            Types.parseValue(this.props.nodeType, name, value),
        });
      },
  }

  render =
    () => (
      <CreateNodeDumb
        {...this.props}
        {...this.state}
        {...this.handlers}
      />
    );
}
