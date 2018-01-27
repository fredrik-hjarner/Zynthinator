import React from 'react';

export const MenuItem = ({
  caption, children, disabled, onClick
}) => {
  if (!children) {
    return (
      <div role="link" className={`item ${disabled}`} onClick={onClick}>
        <span className="text">{caption}</span>
      </div>
    );
  }

  return (
    <div className="item">
      <i className="dropdown icon" />
      <span className="text">{caption}</span>
      <div className="menu compact">
        {children}
      </div>
    </div>
  );
};
