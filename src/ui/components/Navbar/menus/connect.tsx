import React, { useContext } from "react";

import { TopMenuItem, MenuItem } from "ui/components/semantic++";
import { NavbarContext } from "../Navbar";

export const Connect = (): JSX.Element => {
  const { openModalAction } = useContext(NavbarContext);

  return (
    <TopMenuItem caption="Connect">
      <MenuItem
        caption="Eject node"
        onClick={() => {
          openModalAction("EjectNodeModal");
        }}
      />
      <MenuItem
        caption="Inject node"
        onClick={() => {
          openModalAction("InjectNodeModal");
        }}
      />
    </TopMenuItem>
  );
};
