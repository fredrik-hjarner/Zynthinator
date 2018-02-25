import React from 'react';
import {
  Form,
  Dropdown,
} from 'semantic-ui-react';
import { CommonModal } from 'components/Navbar/Modals/CommonModal';

export const CreateTriggerDumb =
  (props) => {
    const formFields = (
      <div>
        <Form.Field>
          <label>Node and parameter to trigger</label>
          <Dropdown
            onChange={props.onChildNodeIdChange}
            options={props.nodesThatHaveInputs}
            multiple
            selection
          />
        </Form.Field>
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
