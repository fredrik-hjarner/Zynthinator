import { deleteAllNodesAction } from 'redux/modules/node';
import { store } from 'redux/Store';

export const importHistory = (history, delay = 0) => { // todo make this settable via UI !!!
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
		// const delay = 0;
		/* if (delay === 0) {
      while (i < history.length) {
        store.dispatch(history[i]);
        i++;
      }
    } else { */
		setTimeout(function replayAction() {
			if (i < history.length) {
				// store.dispatch(history[i].action);
				store.dispatch(history[i]);
				i++;
				debugger; // tslint:disable-line
				setTimeout(replayAction, delay);
			}
		}, delay);
		// }
	};
