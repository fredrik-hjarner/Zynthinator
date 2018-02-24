import React from 'react';
import {
  TopMenuItem,
  MenuItem
} from 'components/semantic++';
import { openModalAction } from 'redux/Actions';

export const Delete = () => (
  <TopMenuItem caption="Delete">
    <MenuItem
      caption="Connection"
      onClick={() => openModalAction('DeleteConnectionModal')}
    />
    <MenuItem
      caption="Node"
      onClick={() => openModalAction('DeleteNodeModal')}
    />
    <MenuItem
      caption="Knob"
      onClick={() => openModalAction('DeleteKnobModal')}
    />
    <MenuItem
      caption="Trigger"
      onClick={() => openModalAction('DeleteTriggerModal')}
    />
  </TopMenuItem>
);
