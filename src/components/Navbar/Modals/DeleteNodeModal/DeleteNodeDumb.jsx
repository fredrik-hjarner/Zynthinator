import React from 'react';
import {
  Form,
  Dropdown,
} from 'semantic-ui-react';
import { BestModal } from '../commonImports';

export const DeleteNodeDumb =
  (props) => {
    const form = (
      <Form inverted>
        <Form.Field>
          <label>nodes</label>
          <Dropdown
            onChange={props.onNodeIdChange}
            options={props.options}
            multiple
            selection
          />
        </Form.Field>
      </Form>
    );

    return (
      <BestModal
        {...props}
        form={form}
        header="Delete Nodes"
        description="Choose the nodes to delete."
        okButtonString="Delete!"
      />
    );
  };
