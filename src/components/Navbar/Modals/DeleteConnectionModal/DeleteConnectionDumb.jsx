import React from 'react';
import {
  Form,
  Dropdown,
} from 'semantic-ui-react';
import { BestModal } from '../commonImports';

export const DeleteConnectionDumb =
  (props) => {
    const form = (
      <Form inverted>
        <Form.Field>
          <label>Connections to delete</label>
          <Dropdown
            onChange={props.onConnectionIdChange}
            options={props.options}
            multiple
            selection
          />
        </Form.Field>
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
