/**
 * Used to minimize the highestNodeIdYet,
 * so that it is truely the
 * highest node id yet.
 */
import * as R from 'ramda';

export const calculateHighestNodeIdReducer =
  (state) => {
    /**
     * Iterate through all the nodes and
     * see what the highest id is.
     */
    const keysAsString = Object.keys(state.nodeManagement.nodes);
    const keysAsInts = keysAsString.map(key => parseInt(key, 10));
    const withOne = keysAsInts.concat([0]); // If no nodes, I push 0 so that id becomes at least 0

    const maxId = Math.max(...withOne);

    return R.assocPath(
      ['nodeManagement', 'highestNodeIdYet'],
      maxId,
      state,
    );
  };
