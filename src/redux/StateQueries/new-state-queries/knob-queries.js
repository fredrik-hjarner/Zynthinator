import memoize from 'fast-memoize';
import { createSelector } from 'reselect';

/**
 * Is automatically memoized because knobs only become a new object if changed.
 */
export const getAllKnobs = (state) => state.nodeManagement.knobs;

/**
 * Private/unexported helper function
 */
const _getKnobByNodeId = createSelector(
  [getAllKnobs],
  knobs => memoize(knobNodeId =>
    Object.values(knobs).find(c => c.knobNodeId === knobNodeId))
);

/**
 * Memoized.
 */
export const getKnobByNodeId = (state, knobNodeId) => _getKnobByNodeId(state)(knobNodeId);


