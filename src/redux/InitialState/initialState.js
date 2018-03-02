import deepFreeze from 'deep-freeze';
import {
  nodeTypeDefinitions,
} from '../../NodeTypeDefinitions';

export const initialState = {
  router: {},
  history: [],
  nodeManagement: {
    highestNodeIdYet: 3,
    highestConnectionIdYet: 1,
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
      2: {
        id: 2,
        name: 'Time-domain Analyser',
        nodeType: 'TimeDomainAnalyser'
      },
      3: {
        id: 3,
        name: 'Master Volume Knob',
        nodeType: 'Knob',
        value: 0.01
      }
    },
    connections: {
      1: {
        id: 1,
        parentNodeId: 3,
        childNodeId: 1,
        childNodeInput: 'gain',
        enabled: true
      }
    },
    groups: {},
    knobs: {
      1: {
        id: 1,
        knobNodeId: 3,
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
    highestIdYet: 1,
    components: {
      1: {
        id: 1,
        type: 'TimeDomainAnalyser',
        nodeId: 2,
        millisecondsBetweenUpdates: 40,
        maxValue: 1,
        minValue: -1,
        canvasWidth: 350,
        canvasHeight: 80,
        bitsToRecord: 11
      }
    },
  },
};

deepFreeze(initialState);

