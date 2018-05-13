import _ from 'lodash';
import { createSelector } from 'reselect';

/****************************
 * NodeGraph
 ***************************/

/**
 * Is automatically memoized because nodeGraphPositions only become a new object if changed.
 */
export const getAllNodeGraphPositions = (state) => state.ui.nodeGraphPositions;

/**
 * Private/unexported helper function
 */
const _getNodeGraphPositioByNodeId = createSelector(
  [getAllNodeGraphPositions],
  positions => _.memoize(nodeId => positions[nodeId])
);

/**
 * Memoized.
 */
export const getNodeGraphPositioByNodeId = (state, nodeId) => _getNodeGraphPositioByNodeId(state)(nodeId);
