import React from 'react';
import { CreateTriggerDumb } from './CreateTriggerDumb';
import {
  createTriggerAction,
  stateQueries,
  // memoizedStateQueries,
} from '../commonImports';

export class CreateTriggerControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      connectedToWhichNode: undefined,
      connectedToWhichParam: undefined,
      childNodeInputs: [],
    };
  }

  handlers = {
    onConfirm:
      () => {
        const {
          childNodeInputs,
          ...rest
        } = this.state;
        createTriggerAction({
          ...rest,
        });
      },
    onChildNodeIdChange:
      (e, { value }) => {
        const connectedToWhichNode = parseInt(value);
        this.setState({ connectedToWhichNode });
        // populate <select> with the inputs of this node
        const {
          nodes,
        } = this.props;
        const node =
          nodes[value];
        const inputs =
          stateQueries.getTriggerableInputsOfNode(node);
        this.setState({ childNodeInputs: inputs.map(input => ({ text: input, value: input })) });
      },
    /* onChildNodeInputChange:
      (e, { value }) => {
        this.setState({ connectedToWhichParam: value });
        // this.state.connectedToWhichParam = value;
      }, */
    onNameChange:
      value =>
        this.setState({
          name: value,
        }),
    onFormStringChange:
      (e, { name, value }) => {
        /* const {
          name,
          value,
        } = e.target; */
        this.setState({
          [name]:
            value,
        });
      },
    onFormFloatChange:
      (e) => {
        const {
          name,
          value,
        } = e.target;
        this.setState({
          [name]:
            parseFloat(value),
        });
      },
  }

  render =
    () => {
      const moreProps = {
        nodesThatHaveInputsInReadableFormat:
          Object.values(this.props.nodesThatHaveInputs)
            .map(node => ({
              text:
                stateQueries
                  .getNodeInReadableFormat(node),
              value:
                node.id,
            })),
      };

      return (
        <CreateTriggerDumb
          {...moreProps}
          {...this.props}
          {...this.state}
          {...this.handlers}
        />
      );
    };
}
