import React from "react";
import { Dropdown } from "semantic-ui-react";
// import { reduxHistory } from 'redux/ReduxHistory';
// import { connect } from 'react-redux';

export class DownloadHistoryFile extends React.Component {
  state = {
    minimized: false, // eslint-disable-line
  };

  onClick = () => {
    // TODO:
    // reduxHistory.downloadHistory(this.props.state);
  };

  render = () => (
    <Dropdown.Item onClick={this.onClick}>Download history file</Dropdown.Item>
  );
}

// const mapStateToProps = state => ({ state });

// const DownloadHistoryFileRedux = connect(mapStateToProps)(DownloadHistoryFile); // todo. decorator.

// export { DownloadHistoryFileRedux as DownloadHistoryFile };
