import React from 'react';
import {
  Dropdown,
  Form,
} from 'semantic-ui-react';
import { CommonModal } from 'components/Navbar/Modals/CommonModal';

export const CreateGroupDumb =
  (props) => {
    const {
      nodesThatHaveOutputs,
      nodesThatHaveInputs,
      options,
    } = props;

    const formFields = (
      <div>
        <Form.Field>
          <label>Choose input node:</label>
          <Form.Select
            onChange={props.onInputNodeChange}
            options={nodesThatHaveInputs}
          />
        </Form.Field>
        <Form.Field>
          <label>Choose output node:</label>
          <Form.Select
            onChange={props.onOutputNodeChange}
            options={nodesThatHaveOutputs}
          />
        </Form.Field>
        <Form.Field>
          <label>Choose all other nodes to group:</label>
          <Dropdown
            onChange={props.onOtherNodesChange}
            options={options}
            multiple
            selection
          />
        </Form.Field>
      </div>);

    return (
      <CommonModal
        {...props}
        formFields={formFields}
        header="Create Group"
        description="Put nodes into a group. A group can then be used as any other node."
        okButtonString="Create it!"
      />
    );
  };
