import React, { useContext } from "react";

import { TopMenuItem, MenuItem } from "ui/components/semantic++";
import { NavbarContext } from "../Navbar";

export const Tests = (): JSX.Element => {
  const { openMessageModalAction } = useContext(NavbarContext);

  const onModalClick = () => {
    openMessageModalAction({
      header: "sample header",
      content: "sample message",
      icon: "info circle",
      color: "blue",
    });
  };

  return (
    <TopMenuItem caption="Tests">
      <MenuItem caption="Modal" onClick={onModalClick} />
    </TopMenuItem>
  );
};
