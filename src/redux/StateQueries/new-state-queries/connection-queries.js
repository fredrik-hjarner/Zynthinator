import memoize from 'fast-memoize';
import { createSelector } from 'reselect';

/**
 * Is automatically memoized because connections only become a new object if changed.
 */
export const getAllConnections = (state) => state.nodeManagement.connections;

/**
 * Private/unexported helper function
 */
const _getConnectionByChildNodeIdAndChildNodeInput = createSelector(
  [getAllConnections],
  connections => memoize((childNodeId, childNodeInput) =>
    Object.values(connections).filter(c => c.childNodeId === childNodeId && c.childNodeInput === childNodeInput))
);

/**
 * Memoized.
 */
export const getConnectionsByChildNodeIdAndChildNodeInput = (state, childNodeId, childNodeInput) =>
  _getConnectionByChildNodeIdAndChildNodeInput(state)(childNodeId, childNodeInput);

/**
 * Private/unexported helper function
 */
const _connectionExists = createSelector(
  [getAllConnections],
  connections => memoize((parentNodeId, childNodeId, childNodeInput) =>
    !!Object.values(connections).find(c => 
      c.parentNodeId === parentNodeId && c.childNodeId === childNodeId && c.childNodeInput === childNodeInput))
);

/**
 * Memoized.
 */
export const connectionExists = (state, parentNodeId, childNodeId, childNodeInput) =>
  _connectionExists(state)(parentNodeId, childNodeId, childNodeInput);