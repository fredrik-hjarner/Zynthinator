import React from 'react';
import { Form } from 'semantic-ui-react';
import { BestModal } from '../commonImports';

export const DeleteNodeDumb = (props) => {
  const firstInputString = 'nodeId';


  const form = (
    <Form inverted>
      <Form.Select
        label={firstInputString}
        onChange={
          (e, { value }) => {
            props.onNodeIdChange(value);
          }
        }
        options={props.options}
        placeholder={firstInputString}
        value={props.nodeId}
      />
    </Form>);

  return (
    <BestModal
      {...props}
      form={form}
      header="Delete Node"
      description="Choose the node to delete."
      okButtonString="Delete it!"
    />
  );
};
