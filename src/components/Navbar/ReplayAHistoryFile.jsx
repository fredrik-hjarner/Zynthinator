import React from 'react';
import {
  Dropdown,
} from 'semantic-ui-react';
import {
  importHistory,
} from '../../redux';

export class ReplayAHistoryFile extends React.Component {
  state = {
    minimized: false, // eslint-disable-line
  };

  onClick =
    () => {
      document.querySelector('#fileId').click();
    }

  onFileReaderLoad =
    (event) => {
      const serialized =
        event.target.result;
      const history =
        JSON.parse(serialized);
      importHistory(history);
    };

  onChange =
    () => {
      // a file has been chosen.
      const fileList =
        document.querySelector('#fileId').files;
      const file =
        fileList[0];
      const fileReader =
        new FileReader();
      fileReader.onload =
        this.onFileReaderLoad;
      fileReader.readAsText(file);
    }

  render =
    () => (
      <Dropdown.Item onClick={this.onClick}>
        Re(play) a history file
        <input
          type="file"
          id="fileId"
          style={{ display: 'none' }}
          onChange={this.onChange}
        />
      </Dropdown.Item>
    );
}
