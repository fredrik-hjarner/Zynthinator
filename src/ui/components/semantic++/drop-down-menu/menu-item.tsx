import React from "react";

type Props = {
  caption: string;
  children?: any;
  disabled?: boolean;
  onClick?: any;
};

export const MenuItem = ({
  caption,
  children,
  disabled,
  onClick,
}: Props): JSX.Element => {
  if (!children) {
    return (
      <div
        role="link"
        className={`item ${disabled && "disabled"}`}
        onClick={onClick}
      >
        <span className="text">{caption}</span>
      </div>
    );
  }

  return (
    <div className="item">
      <i className="dropdown icon" />
      <span className="text">{caption}</span>
      <div className="menu compact">{children}</div>
    </div>
  );
};
