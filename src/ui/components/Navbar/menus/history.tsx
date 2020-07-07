import React from "react";
import { Dropdown } from "semantic-ui-react";

import { TopMenuItem, MenuItem } from "ui/components/semantic++";
// import { ReplayAHistoryFile } from "../ReplayAHistoryFile";
// import { DownloadHistoryFile } from "../DownloadHistoryFile";

export const History = () => (
  <TopMenuItem caption="History">
    <MenuItem disabled caption="Undo action" />
    <MenuItem disabled caption="Redo action" />
    <Dropdown.Divider />
    <MenuItem disabled caption="Download state file" />
    <MenuItem disabled caption="Upload state file" />
    <Dropdown.Divider />
    {/* <DownloadHistoryFile />
    <ReplayAHistoryFile /> */}
  </TopMenuItem>
);
