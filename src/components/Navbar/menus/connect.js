import React from 'react';
import {
  TopMenuItem,
  MenuItem
} from 'components/semantic++';
import { openModalAction } from 'redux/Actions';

export const Connect = () => (
  <TopMenuItem caption="Connect">
    <MenuItem
      caption="Connect nodes"
      onClick={() => openModalAction('CreateConnectionModal')}
    />
    <MenuItem
      caption="Eject node"
      onClick={() => openModalAction('EjectNodeModal')}
    />
    <MenuItem
      caption="Inject node"
      onClick={() => openModalAction('InjectNodeModal')}
    />
  </TopMenuItem>
);
