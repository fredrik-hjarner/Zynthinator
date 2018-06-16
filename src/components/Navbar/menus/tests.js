import React from 'react';
import { TopMenuItem, MenuItem } from 'components/semantic++';
import { openMessageModalAction } from 'redux/modules/ui';

const onModalClick = () => openMessageModalAction({
  header: 'sample header',
  content: 'sample message',
  icon: 'info circle',
  color: 'blue'
});

export const Tests = () => (
  <TopMenuItem caption="Tests">
    <MenuItem caption="Modal" onClick={onModalClick} />
  </TopMenuItem>
);
