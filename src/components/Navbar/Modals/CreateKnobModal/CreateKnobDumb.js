import React from 'react';
import { Form } from 'semantic-ui-react';
import { CommonModal } from 'components/Navbar/Modals/CommonModal';

export const CreateKnobDumb = (props) => {
  const formFields = (
    <div>
      <Form.Group widths="equal">
        <Form.Select
          name="func"
          label="Function"
          onChange={props.onFormStringChange}
          options={props.functionOptions}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="minValue"
          width="8"
          type="number"
          label="Minimum value"
          onChange={props.onFormFloatChange}
          value={props.minValue}
        />
        <Form.Input
          name="maxValue"
          width="8"
          type="number"
          label="Maximum value"
          onChange={props.onFormFloatChange}
          value={props.maxValue}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="step"
          type="number"
          label="Step"
          onChange={props.onFormFloatChange}
          value={props.step}
        />
      </Form.Group>
    </div>);

  return (
    <CommonModal
      {...props}
      formFields={formFields}
      header="Create Knob"
      description="Create a knob that sets/changes a value of a node."
      okButtonString="Create it!"
    />
  );
};
