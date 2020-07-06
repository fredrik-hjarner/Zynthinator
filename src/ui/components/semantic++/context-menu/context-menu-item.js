import React from 'react';

export const ContextMenuItem = ({
  caption, children, disabled, onClick
}) => {
  if (!children) {
    return (
      <div role="link" className={`item link ${disabled}`} onClick={onClick}>
        <span className="text">{caption}</span>
      </div>
    );
  }

  return (
    <div className="item">
      <i className="dropdown icon" />
      <span className="text">{caption}</span>
      <div className="menu">
        {children}
      </div>
    </div>
  );
};
