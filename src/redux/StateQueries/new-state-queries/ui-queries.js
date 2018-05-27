import memoize from 'fast-memoize';
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
  positions => memoize(nodeId => positions[nodeId])
);

/**
 * Memoized.
 */
export const getNodeGraphPositioByNodeId = (state, nodeId) => _getNodeGraphPositioByNodeId(state)(nodeId);

/**
 * Is automatically memoized because it becomes a new object only if changed.
 */
export const getAllUiComponents = state => state.ui.components;

/**
 * Private/unexported helper function
 */
const _getUiComponentByNodeId = createSelector(
  [getAllUiComponents],
  components => memoize(nodeId => Object.values(components).find(c => c.nodeId === nodeId))
);

/**
 * Memoized.
 */
export const getUiComponentByNodeId = (state, nodeId) => _getUiComponentByNodeId(state)(nodeId);
