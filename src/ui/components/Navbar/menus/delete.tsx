import React, { useContext } from "react";

import { TopMenuItem, MenuItem } from "ui/components/semantic++";
import { NavbarContext } from "../Navbar";

export const Delete = (): JSX.Element => {
  const { openModalAction } = useContext(NavbarContext);

  return (
    <TopMenuItem caption="Delete">
      {/* <MenuItem
      caption="Connection"
      onClick={() => openModalAction('DeleteConnectionModal')}
    /> */}
      {/* <MenuItem
      caption="Node"
      onClick={() => openModalAction('DeleteNodeModal')}
    /> */}
      <MenuItem
        caption="Knob"
        onClick={() => {
          openModalAction("DeleteKnobModal");
        }}
      />
      <MenuItem
        caption="Trigger"
        onClick={() => {
          openModalAction("DeleteTriggerModal");
        }}
      />
    </TopMenuItem>
  );
};
