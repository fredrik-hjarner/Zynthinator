import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import { BestModal } from 'components/semantic++';

export const CommonModal = (props) => {
  const form = (
    <Form inverted>
      <Form.Field>
        <label>Name (optional)</label>
        <Input
          onChange={(e) => {
            props.onNameChange(e.target.value);
          }}
          type="text"
          value={props.name}
        />
      </Form.Field>
      {props.formFields}
    </Form>);

  return (
    <BestModal
      {...props}
      form={form}
    />
  );
};

