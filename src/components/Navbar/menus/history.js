import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import {
  TopMenuItem,
  MenuItem
} from '../primitive-building-blocks';

export const History = () => (
  <TopMenuItem caption="History">
    <MenuItem disabled="disabled" caption="Undo action" />
    <MenuItem disabled="disabled" caption="Redo action" />
    <Dropdown.Divider />
    <MenuItem disabled="disabled" caption="Download state file" />
    <MenuItem disabled="disabled" caption="Upload state file" />
    <Dropdown.Divider />
    <MenuItem caption="Download history file" />
    <MenuItem caption="(Re)play a history file" />
  </TopMenuItem>
);
