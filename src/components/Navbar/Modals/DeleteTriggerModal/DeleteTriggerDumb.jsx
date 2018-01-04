import React from 'react';
import { Form } from 'semantic-ui-react';
import { BestModal } from '../commonImports';

export const DeleteTriggerDumb = (props) => {
  const firstInputString = 'triggerId';

  const form = (
    <Form inverted>
      <Form.Select
        label={firstInputString}
        onChange={
          (e, { value }) => {
            props.onTriggerIdChange(value);
          }
        }
        options={props.options}
        placeholder={firstInputString}
        value={props.triggerId}
      />
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
