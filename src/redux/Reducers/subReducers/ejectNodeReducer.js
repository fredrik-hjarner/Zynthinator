import * as R from 'ramda';
import {
  stateQueries,
} from '../../StateQueries';
import { deleteConnectionReducer } from './deleteConnectionReducer';
import { createConnectionReducer } from './createConnectionReducer';

export const ejectNodeReducer =
  (state, action) => { // eslint-disable-line
    /**
     * TODO. Temporarily simply replace the node with a
     * UnityGain node.
     * 
     * Not all types of connections are actually legal.
     * Only when the input param is 'input'.
     */

    // Find all connections that the node is in
    const connections =
      stateQueries.getConnectionsByNodeId(state.nodeManagement.connections, action.payload.nodeId);

    // then remove the illegal connections.
    const filteredConnections =
      R.filter(R.propEq('childNodeInput', 'input'), connections);
    
    const connectionIds =
      filteredConnections.map(x => x.id);

    // Save the parents and the children of these connections
    const connectionsWhereNodeIdIsChild =
      filteredConnections.filter(R.propEq('childNodeId', action.payload.nodeId));
    const parentNodeIds =
      connectionsWhereNodeIdIsChild.map(R.prop('parentNodeId'));

    const connectionsWhereNodeIdIsParent =
      filteredConnections.filter(R.propEq('parentNodeId', action.payload.nodeId));
    const childNodeIds =
      connectionsWhereNodeIdIsParent.map(R.prop('childNodeId'));

    // Delete the connections.
    state = deleteConnectionReducer(state, { payload: { ids: connectionIds } }); // eslint-disable-line

    // Create new connections.
    // All parentNodeIds should connect to every childNodeId.
    // I already have N-to-N capability so that should be possible right away.
    const _action = {
      parentNodeIds,
      childNodes:
        childNodeIds.map(nodeId =>
          ({
            nodeId,
            input: 'input',
          })),
    };
    state = createConnectionReducer(state, _action); // eslint-disable-line
    
    return state;
  };
