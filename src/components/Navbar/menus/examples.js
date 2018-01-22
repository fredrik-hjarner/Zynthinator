import React from 'react';
import {
  TopMenuItem,
  MenuItem
} from '../primitive-building-blocks';
import * as E from '../../../Examples';

export const Examples = () => (
  <TopMenuItem caption="Examples">
    <MenuItem
      caption="1. Amplitude-modulated sine"
      onClick={E.example1}
    />
    <MenuItem
      caption="2. Simple music with low-res sine"
      onClick={E.example2}
    />
  </TopMenuItem>
);
