import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import {
  TopMenuItem,
  MenuItem
} from 'components/semantic++';
import { ReplayAHistoryFile } from '../ReplayAHistoryFile';
import { DownloadHistoryFileRedux } from '../DownloadHistoryFileRedux';

export const History = () => (
  <TopMenuItem caption="History">
    <MenuItem disabled="disabled" caption="Undo action" />
    <MenuItem disabled="disabled" caption="Redo action" />
    <Dropdown.Divider />
    <MenuItem disabled="disabled" caption="Download state file" />
    <MenuItem disabled="disabled" caption="Upload state file" />
    <Dropdown.Divider />
    <DownloadHistoryFileRedux />
    <ReplayAHistoryFile />
  </TopMenuItem>
);
