import React from 'react';
import {
  Dropdown,
} from 'semantic-ui-react';
import {
  reduxHistory,
} from '../../redux';

export class DownloadHistoryFile extends React.Component {
  state = {
    minimized: false, // eslint-disable-line
  };

  onClick =
    () => {
      reduxHistory.downloadHistory(this.props.state);
    }

  render =
    () => (
      <Dropdown.Item onClick={this.onClick}>
        Download history file
      </Dropdown.Item>
    );
}
