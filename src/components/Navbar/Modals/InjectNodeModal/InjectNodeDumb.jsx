import React from 'react';
import {
  Form,
} from 'semantic-ui-react';
import { BestModal } from 'components/semantic++';

export const InjectNodeDumb =
  (props) => {
    const form = (
      <Form inverted>
        <Form.Select
          label="Select node to inject"
          onChange={props.onNodeIdChange}
          options={props.nodeOptions}
          value={props.nodeId && props.nodeId.toString()}
        />
        <Form.Select
          label="Select connection to inject into"
          onChange={props.onConnectionIdChange}
          options={props.options}
          value={props.connectionId}
        />
      </Form>);

    return (
      <BestModal
        {...props}
        form={form}
        header="Inject Node"
        description="Inject a node into a connection. That connection will break and will be reconnected with the node in the middle." // eslint-disable-line
        okButtonString="Inject it!"
      />
    );
  };
