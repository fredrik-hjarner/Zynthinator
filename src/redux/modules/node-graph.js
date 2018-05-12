import { v4 as uuidv4 } from 'uuid'; // eslint-disable-line

/************************************
 * Constants
 ************************************/

// const CREATE_NODE = 'zynthinator:node-graph:create-node';
const MOVE_NODE = 'zynthinator:node-graph:move-node';
// const CONNECT_NODES = 'zynthinator:node-graph:connect-nodes';

/************************************
 * Reducers
 ************************************/

const state = { // eslint-disable-line
  nodes: {},
  connections: {},
  ui: {
    nodeGraphPositions: {}
  }
};

// window.state = state;

function reducer(action) {
  // console.log('Action:');
  // console.log(action);
  // console.log('');

  const { type, payload } = action; // eslint-disable-line

  switch (type) {
    // case CREATE_NODE: // eslint-disable-line
    //   // create the node
    //   const uuid = uuidv4();
    //   state.nodes[uuid] = {
    //     id: uuid,
    //     name: payload.name,
    //     inputs: payload.inputs,
    //     outputs: payload.outputs,
    //   };

    //   // create the position
    //   const pos_uuid = uuidv4(); // eslint-disable-line
    //   state.ui.nodeGraphPositions[pos_uuid] = {
    //     id: pos_uuid,
    //     nodeId: uuid,
    //     x: payload.position.x,
    //     y: payload.position.y
    //   };
    //   break;
    case MOVE_NODE:

      break;
    // case CONNECT_NODES: {
    //   const uuid = uuidv4(); // eslint-disable-line
    //   state.connections[uuid] = payload;
    //   state.connections[uuid].id = uuid;
    //   break;
    // }
    default:
      throw 'default case';
  }

  // console.log('State after action:');
  // console.dir(state);
  // console.log('');

  /***************************
   * Fire up the renderer
   ***************************/

  // render();
}

/************************************
 * Actions
 ************************************/

// export function createNode({ name, inputs = [], outputs = [], position = { x: 0, y: 0 } }) {
//   const action = {
//     type: CREATE_NODE,
//     payload: { name, inputs, outputs, position }
//   };
//   reducer(action);
// }

/**
 * Called on mouse-up when dragging is completed.
 * So it is not updated on every mouse-move event.
 */
export function moveNode(nodeName, x, y) {
  const action = {
    type: MOVE_NODE,
    payload: { nodeName, x, y }
  };
  reducer(action);
}

// export function connectNodes({ parentNode, parentInput, childNode, childInput }) {
//   const action = {
//     type: CONNECT_NODES,
//     payload: { parentNode, parentInput, childNode, childInput }
//   };
//   reducer(action);
// }
