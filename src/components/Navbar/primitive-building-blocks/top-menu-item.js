import React from 'react';

export const TopMenuItem = ({ caption, children, disabled }) => (
  <a className={`ui dropdown item ${disabled}`}>
    {caption}
    <i className="dropdown icon" />
    <div className="menu">
      {children}
    </div>
  </a>
);
