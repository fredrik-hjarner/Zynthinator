import React from 'react';
import {
  TopMenuItem,
  MenuItem
} from '../primitive-building-blocks';

export const Modify = () => (
  <TopMenuItem caption="Modify">
    <MenuItem caption="Connection" />
    <MenuItem caption="Node" />
    <MenuItem caption="Knob" />
    <MenuItem caption="Trigger" />
  </TopMenuItem>
);
