import { getAllConnections } from 'redux/StateQueries/new-state-queries/connection-queries';
import _ from 'lodash';
import * as R from 'ramda';
import { connections } from './connections';

class ConnectionsListener {
  /**
   * The previous state is needed to see if the new state has changed.
   */
  previousConnections = {};

  /**
   * This method subscribes to changes in the store.
   */
  onActionWasDispatched = (newState) => {
    const newConnections = getAllConnections(newState);
    /**
     * Check if the state is EXACTLY the same as before.
     */
    if (newConnections !== this.previousConnections) {
      this.onConnectionsChanged(newConnections);
      this.previousConnections = newConnections;
    }
  }

  onConnectionsChanged = (newConnections) => {
    // console.log('onConnectionsChanged {');
    // nodes can have been removed, changed or added.
    const prevConnections = this.previousConnections; // todo refactor.
    // Check which ones were removed
    const idsForConnectionsThatWereDeleted =
      _.difference(
        Object.keys(prevConnections),
        Object.keys(newConnections),
      );
    // console.log(`\tidsForConnectionsThatWereDeleted: ${idsForConnectionsThatWereDeleted}`);
    connections.deleteConnections({
      previousConnections: this.previousConnections,
      idsForConnectionsThatWereDeleted,
    });

    // Check which ones were added
    // console.log(`\tidsForConnectionsThatWereAdded: ${idsForConnectionsThatWereAdded}`);
    const connectionsThatWereAdded =
      R.compose(
        R.values,
        R.pick(R.__, newConnections),
        R.difference,
      )(R.keys(newConnections), R.keys(prevConnections));
    
    connections.createConnections({ connectionsThatWereAdded });

    // console.log('}');
  }
}

export const connectionsListener = new ConnectionsListener();
