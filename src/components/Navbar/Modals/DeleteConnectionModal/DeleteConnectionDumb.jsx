import React from 'react';
import { Form } from 'semantic-ui-react';
import { BestModal } from '../commonImports';

export const DeleteConnectionDumb = (props) => {
  const form = (
    <Form inverted>
      <Form.Select
        label="Select which connection to break."
        onChange={
          (e, { value }) => {
            props.onConnectionIdChange(value);
          }
        }
        options={props.connections}
        placeholder="connectionId"
        value={props.connectionId}
      />
    </Form>);

  return (
    <BestModal
      {...props}
      form={form}
      header="Disconnect Nodes"
      description="Disconnect two connected nodes."
      okButtonString="Break connection!"
    />
  );
};
