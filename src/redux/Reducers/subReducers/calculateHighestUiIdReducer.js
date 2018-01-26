/**
 * Used to minimize the highestIdYet,
 * so that it is truely the
 * highest ui component id yet.
 */
import * as R from 'ramda';

export const calculateHighestUiIdReducer =
  (state) => {
    /**
     * Iterate through all the ui
     * components and
     * see what the highest id is.
     */
    const keysAsString = Object.keys(state.ui.components);
    const keysAsInts = keysAsString.map(key => parseInt(key, 10));
    const withOne = keysAsInts.concat([0]); // If no components, I push 0 so that id becomes at least 0

    const maxId = Math.max(...withOne);

    return R.assocPath(
      ['ui', 'highestIdYet'],
      maxId,
      state,
    );
  };
