import React from 'react';
import {
  TopMenuItem,
  MenuItem
} from '../primitive-building-blocks';
import { openModalAction } from '../../../redux';

export const Modify = () => (
  <TopMenuItem caption="Modify">
    <MenuItem caption="Connection" disabled="disabled" />
    <MenuItem
      caption="Node"
      onClick={() => openModalAction('EditNodeModal')}
    />
    <MenuItem caption="Knob" disabled="disabled" />
    <MenuItem caption="Trigger" disabled="disabled" />
  </TopMenuItem>
);
