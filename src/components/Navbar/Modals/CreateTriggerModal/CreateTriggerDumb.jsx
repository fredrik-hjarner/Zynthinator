import React from 'react';
import { Form } from 'semantic-ui-react';
import {
  CommonModal,
} from '../commonImports';

export const CreateTriggerDumb =
  (props) => {
    const thirdInputString = 'Node to control';
    const fourthInputString = 'Parameter to control';

    const formFields = (
      <div>
        <Form.Select
          label={thirdInputString}
          onChange={props.onChildNodeIdChange}
          options={props.nodesThatHaveInputsInReadableFormat}
        />
        <Form.Select
          name="connectedToWhichParam"
          label={fourthInputString}
          onChange={props.onFormStringChange}
          options={props.childNodeInputs}
        />
      </div>);

    return (
      <CommonModal
        {...props}
        formFields={formFields}
        header="Create Trigger"
        description="Create a trigger that triggers some effect in a node."
        okButtonString="Create it!"
      />
    );
  };
