import React from 'react';
import { Form } from 'semantic-ui-react';
import {
  CommonModal,
} from '../commonImports';

export const CreateConnectionDumb =
  (props) => {
    const firstInputString = 'parentId';
    const thirdInputString = 'childId';
    const fourthInputString = 'childInput';

    const formFields = (
      <div>
        <Form.Select
          label={firstInputString}
          onChange={props.onParentNodeIdChange}
          options={props.nodesThatHaveOutputs}
          placeholder={firstInputString}
        />
        <Form.Select
          label={thirdInputString}
          onChange={props.onChildNodeIdChange}
          options={props.nodesThatHaveInputs}
          placeholder={thirdInputString}
        />
        <Form.Select
          label={fourthInputString}
          onChange={props.onChildNodeInputChange}
          options={props.childNodeInputs}
          placeholder={fourthInputString}
        />
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
