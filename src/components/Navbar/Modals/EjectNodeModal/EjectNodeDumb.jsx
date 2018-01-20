import React from 'react';
import {
  Form,
} from 'semantic-ui-react';
import { BestModal } from '../commonImports';

export const EjectNodeDumb =
  (props) => {
    const form = (
      <Form inverted>
        <Form.Select
          label="Select node to eject"
          onChange={props.onNodeIdChange}
          options={props.nodeOptions}
          value={props.nodeId && props.nodeId.toString()}
        />
      </Form>);

    return (
      <BestModal
        {...props}
        form={form}
        header="Eject Node"
        description="The node will be disconnected, but what comes before and after it will connect. It is a good way to remove a node without altering anything else." // eslint-disable-line
        okButtonString="Eject!"
      />
    );
  };
