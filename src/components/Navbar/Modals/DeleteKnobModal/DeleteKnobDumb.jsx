import React from 'react';
import { Form } from 'semantic-ui-react';
import { BestModal } from '../commonImports';

export const DeleteKnobDumb = (props) => {
  const firstInputString = 'knobId';

  const form = (
    <Form inverted>
      <Form.Select
        label={firstInputString}
        onChange={
          (e, { value }) => {
            props.onKnobIdChange(value);
          }
        }
        options={props.options}
        placeholder={firstInputString}
        value={props.knobId}
      />
    </Form>);

  return (
    <BestModal
      {...props}
      form={form}
      header="Delete Knob"
      description="Choose the knob to delete."
      okButtonString="Delete it!"
    />
  );
};
