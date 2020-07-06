import React from "react";

type Props = {
  caption: string;
  children: any;
  disabled?: boolean;
};

export const TopMenuItem = ({ caption, children, disabled }: Props) => (
  <a className={`ui dropdown item ${disabled}`}>
    {caption}
    <i className="dropdown icon" />
    <div className="menu compact">{children}</div>
  </a>
);
