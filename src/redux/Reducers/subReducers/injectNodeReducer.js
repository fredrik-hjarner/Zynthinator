// import * as R from 'ramda';
import {
  stateQueries,
} from '../../StateQueries';
import { deleteConnectionReducer } from './deleteConnectionReducer';
import { createConnectionReducer } from './createConnectionReducer';

export const injectNodeReducer =
  (state, { payload: { nodeId, connectionId } }) => {
    // Save the parent and child.
    const connection =
      stateQueries.getConnectionById({
        connections: state.nodeManagement.connections,
        connectionId,
      });
    const {
      parentNodeId,
      childNodeId,
    } = connection;

    // Break the connection.
    state = deleteConnectionReducer(state, { payload: { ids: [connectionId] } }); // eslint-disable-line

    // Reconnect it with the node injected.
    // connect the parent to me
    // connect me to the child
    state = createConnectionReducer(state, {    // eslint-disable-line
      parentNodeIds: [parentNodeId],
      childNodes: [{
        nodeId,
        input: 'input',
      }],
    });
    state = createConnectionReducer(state, {    // eslint-disable-line
      parentNodeIds: [nodeId],
      childNodes: [{
        nodeId: childNodeId,
        input: 'input',
      }],
    });

    return state;
  };
