import deepFreeze from 'deep-freeze';
import {
  nodeTypeDefinitions,
} from '../../NodeTypeDefinitions';

export const initialState = {
  router: {},
  history: [],
  nodeManagement: {
    highestNodeIdYet: 1,
    highestConnectionIdYet: 0,
    highestGroupIdYet: 0,
    highestKnobIdYet: 1,
    highestTriggerIdYet: 0,
    nodes: {
      1: {
        id: 1,
        gain: 0.01,
        nodeType: 'Speakers',
        name: 'Speakers',
      },
    },
    connections: {},
    groups: {},
    knobs: {
      1: {
        id: 1,
        name: 'Master loudness',
        connectedToWhichNode: 1,
        connectedToWhichParam: 'gain',
        minValue: 0,
        maxValue: 1,
        function: 'exponential',
      },
    },
    triggers: {},
    /**
     * An array of the triggers that was triggered.
     * When a triggered trigger has been fully registered and executed
     * then it is removed from this array.
     */
    triggeredTriggers: [],
    nodeTypeDefinitions,
  },
  modal: null,        // move into UI
  propsToModal: null, // move into UI
  ui: {
    highestIdYet: 0,
    components: {},
  },
};

deepFreeze(initialState);

