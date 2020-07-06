import React from "react";

import { TopMenuItem, MenuItem } from "ui/components/semantic++";

export const File = () => (
  <TopMenuItem caption="File">
    <MenuItem
      caption="New"
      onClick={() => {
        localStorage.clear();
        location.reload(); // eslint-disable-line
      }}
    />
  </TopMenuItem>
);
