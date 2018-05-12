import { v4 as uuidv4 } from 'uuid'; // eslint-disable-line
import { store } from 'redux/Store';
import * as R from 'ramda';
import { actionTypes } from 'redux/Constants';

/************************************
 * Constants
 ************************************/

// const CREATE_NODE = 'zynthinator:node-graph:create-node';
// const MOVE_NODE = 'zynthinator:node-graph:move-node';
// const CONNECT_NODES = 'zynthinator:node-graph:connect-nodes';

/************************************
 * Reducers
 ************************************/

// const state = { // eslint-disable-line
//   nodes: {},
//   connections: {},
//   ui: {
//     nodeGraphPositions: {}
//   }
// };

// window.state = state;

export function moveGraphNodeReducer(state, action) {
  // console.log('Action:');
  // console.log(action);
  // console.log('');

  const { type, payload } = action; // eslint-disable-line

  switch (type) {
    case actionTypes.MOVE_GRAPH_NODE:
      return R.assocPath(
        ['ui', 'nodeGraphPositions', `${payload.nodeId}`],
        {
          // node: uuidv4() // todo
          nodeId: payload.nodeId,
          x: payload.x,
          y: payload.y
        },
        state,
      );

    default:
      throw 'default case';
  }
}

/************************************
 * Actions
 ************************************/

/**
 * Called on mouse-up when dragging is completed.
 * So it is not updated on every mouse-move event.
 */
export function moveGraphNode(nodeId, x, y) {
  const action = {
    type: actionTypes.MOVE_GRAPH_NODE,
    payload: { nodeId, x, y }
  };
  store.dispatch(action);
}
