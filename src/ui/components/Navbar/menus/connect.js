import React from "react";

import { TopMenuItem, MenuItem } from "ui/components/semantic++";
// import { openModalAction } from "redux/modules/ui";

export const Connect = () => (
  <TopMenuItem caption="Connect">
    <MenuItem
      caption="Eject node"
      onClick={() => {
        // openModalAction("EjectNodeModal");
      }}
    />
    <MenuItem
      caption="Inject node"
      onClick={() => {
        // openModalAction("InjectNodeModal");
      }}
    />
  </TopMenuItem>
);
