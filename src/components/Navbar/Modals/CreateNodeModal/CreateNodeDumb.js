import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import { BestModal } from 'components/semantic++';
import * as Types from 'NodeTypeDefinitions';

export const CreateNodeDumb =
  (props) => {
    /**
     * @param {*} name The name of the parameter
     * @param {*} type The type of the parameter
     * @param {*} value The value of the parameter
     */
    const createFormField = (name, type, value) => {
      if (type === 'string' || type === 'float' || type === 'integer') {
        return (
          <Form.Field>
            <label>{name}</label>
            <Input
              name={name}
              onChange={props.onFormChange}
              type={type === 'string' ? 'text' : 'number'}
              value={value}
            />
          </Form.Field>
        );
      } else if (Array.isArray(type)) {
        const options =
          Types.nodeTypeDefinitions[props.nodeType].params[name].type // eslint-disable-line
            .map(enumVal => ({
              key: enumVal,
              value: enumVal,
              text: enumVal,
            }));
        return (
          <Form.Field>
            <label>{name}</label>
            <Form.Select
              name={name}
              onChange={props.onFormChange}
              value={value}
              options={options}
            />
          </Form.Field>
        );
      }
      const message =
        `Error in CreateNodeDumb.js: ${JSON.stringify(type, null, 2)} is not a valid 'type'. 'name' was ${name}`;
      alert(message);
      console.log(message);
      debugger;
      throw message;
      // return null;
    };

    const entries = Object.entries(Types.nodeTypeDefinitions[props.nodeType].params);
    const allFormFieldElements = entries.map(([name, { type }]) => createFormField(name, type, props[name]));

    const form = (
      <Form inverted>
        {allFormFieldElements}
      </Form>);

    return (
      <BestModal
        {...props}
        form={form}
        header={`Create/edit ${props.nodeType}`}
        description="Choose settings."
        okButtonString="Create/edit it!"
      />
    );
  };
