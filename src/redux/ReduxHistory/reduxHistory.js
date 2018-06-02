import { saveAs } from 'file-saver';
import { filterHistory } from './filterHistory';

class ReduxHistory {
  constructor() {
    this.startTime = Date.now();
  }

  /**
   *  [
   *    {
   *      action,
   *      timestamp,
   *    }
   *  ]
   */
  /* history = [];

  addActionToHistory =
    (action) => {
      const timestamp =
        Date.now() - this.startTime;
      this.history.push({
        action,
        timestamp,
      });
    } */

  downloadHistory = (state) => {
    const _history = state.history;
    /**
     * todo. make it so that this can be enabled and disabled
     */
    const history = filterHistory(_history);
    const serialized = JSON.stringify(history, null, 2);
    const blob = new Blob([serialized], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'history.json');
  }
}

export const reduxHistory = new ReduxHistory();
