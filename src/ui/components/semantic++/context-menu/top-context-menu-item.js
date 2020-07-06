import React from 'react';
import { Icon } from 'semantic-ui-react';

export const TopContextMenuItem = ({ caption, children, disabled }) => {
  const icon = children ? <Icon name='caret right' /> : null;
  return (
    <a className={`ui dropdown item ${disabled}`}>
      <span style={{ whiteSpace: 'nowrap' }}>{caption}{icon}</span>
      {children && <div className="menu">{children}</div>}
    </a>
  );
};
