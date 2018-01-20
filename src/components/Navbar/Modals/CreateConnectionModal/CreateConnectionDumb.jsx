import React from 'react';
import {
  Form,
  Dropdown,
} from 'semantic-ui-react';
import {
  CommonModal,
} from '../commonImports';

export const CreateConnectionDumb =
  (props) => {
    const formFields = (
      <div>
        <Form.Field>
          <label>parents</label>
          <Dropdown
            onChange={props.onParentNodeIdChange}
            options={props.nodesThatHaveOutputs}
            multiple
            selection
          />
        </Form.Field>
        <Form.Field>
          <label>children</label>
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
        header="Connect Nodes"
        description="Choose which nodes to connect."
        okButtonString="Connect them!"
      />
    );
  };
