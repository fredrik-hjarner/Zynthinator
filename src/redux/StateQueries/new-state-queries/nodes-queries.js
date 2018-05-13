import _ from 'lodash';
import { createSelector } from 'reselect';

/**
 * Is automatically memoized because nodes only become a new object if changed.
 */
export const getAllNodes = (state) => state.nodeManagement.nodes;

/**
 * Private/unexported helper function
 */
const _getNodeById = createSelector(
  [getAllNodes],
  nodes => _.memoize(id => nodes[id])
);

/**
 * Memoized.
 */
export const getNodeById = (state, id) => _getNodeById(state)(id);
