import React from 'react';
import {
  Form,
  Dropdown,
} from 'semantic-ui-react';
import { BestModal } from '../commonImports';

export const DeleteKnobDumb = (props) => {
  const form = (
    <Form inverted>
      <Form.Field>
        <label>knobs</label>
        <Dropdown
          onChange={props.onKnobIdChange}
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
      header="Delete Knob"
      description="Choose the knob to delete."
      okButtonString="Delete it!"
    />
  );
};
