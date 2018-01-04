import React from 'react';
import {
  Dropdown,
} from 'semantic-ui-react';
import {
  deleteAllNodesAction,
  store,
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
      this.importHistory(history);
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

  importHistory =
    (history) => {
      /**
       * Clear localStorage
       */
      localStorage.clear();

      /**
       * Reset STATE
       */
      deleteAllNodesAction(); // todo this action should NOT be recorded in history.

      /**
       * set the history.
       * no it should NOT set the history!
       * because the actions will be added to the
       * history doubly!
       */
      // reduxHistory.history = history;

      /**
       * Replay the history??
       */
      // alert(JSON.stringify(reduxHistory.history, null, 2));
      let i = 0;
      const delay = 0;
      if (delay === 0) {
        while (i < history.length) {
          store.dispatch(history[i]);
          i++;
        }
      } else {
        setTimeout(function replayAction() {
          if (i < history.length) {
            // store.dispatch(history[i].action);
            store.dispatch(history[i]);
            i++;
            setTimeout(replayAction, delay);
          }
        }, delay);
      }
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
