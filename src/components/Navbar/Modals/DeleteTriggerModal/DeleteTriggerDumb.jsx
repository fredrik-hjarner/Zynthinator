import React from 'react';
import {
  Form,
  Dropdown,
} from 'semantic-ui-react';
import { BestModal } from 'components/semantic++';

export const DeleteTriggerDumb = (props) => {
  const form = (
    <Form inverted>
      <Form.Field>
        <label>triggers</label>
        <Dropdown
          onChange={props.onTriggerIdChange}
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
      header="Delete Trigger"
      description="Choose the trigger to delete."
      okButtonString="Delete it!"
    />
  );
};
