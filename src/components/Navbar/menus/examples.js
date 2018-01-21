import React from 'react';
import {
  TopMenuItem,
  MenuItem
} from '../primitive-building-blocks';

export const Examples = () => (
  <TopMenuItem caption="Examples">
    <MenuItem caption="1. Amplitude-modulated sine" />
    <MenuItem caption="2. Simple music with low-res sine" />
  </TopMenuItem>
);
