import { importHistory } from 'redux/ReduxHistory';

let history;

export const example1 =
  () => {
    importHistory(history, 0);
  };

history =
[
  {
    type: 'CREATE_NODE',
    name: 'sine',
    frequency: 2,
    detune: 0,
    oscillatorType: 'sine',
    minValue: -1,
    maxValue: 1,
    nodeType: 'Oscillator'
  },
  {
    type: 'MOVE_KNOB',
    id: 1,
    value: 0.13306486449007918
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      2
    ],
    childNodes: [
      {
        nodeId: 1,
        input: 'input'
      }
    ]
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      4
    ],
    childNodes: [
      {
        nodeId: 2,
        input: 'input'
      }
    ]
  },
  {
    type: 'MOVE_KNOB',
    id: 1,
    value: 0.12242500570857913
  },
  {
    type: 'MOVE_KNOB',
    id: 1,
    value: 0.11232252824720639
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'bitsToRecord',
    value: '15'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'millisecondsBetweenUpdates',
    value: '50'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    lowestInput: -1,
    highestInput: 1,
    lowestOutput: -1,
    highestOutput: 1,
    nodeType: 'ChangeRange'
  },
  {
    type: 'INJECT_NODE',
    payload: {
      nodeId: 5,
      connectionId: 3
    }
  },
  {
    type: 'CREATE_KNOB',
    name: 'max-value',
    payload: {
      connectedToWhichNode: 5,
      connectedToWhichParam: 'highestOutput',
      minValue: -1,
      maxValue: 1,
      func: 'linear',
      step: 0.01
    }
  },
  {
    type: 'MOVE_KNOB',
    id: 2,
    value: 0.9169
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 2,
      x: 578,
      y: 255
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 6,
      x: 144,
      y: 475
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 5,
      x: 330,
      y: 257
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 95,
      y: 233
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 1,
      x: 979,
      y: 255
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 3,
      x: 813,
      y: 519
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 135,
      y: 258
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 5,
      x: 337,
      y: 255
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 151,
      y: 254
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 6,
      x: 113,
      y: 476
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 70,
      y: 94
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 6,
      x: 103,
      y: 343
    }
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      6
    ],
    childNodes: [
      {
        nodeId: 5,
        input: 'highestOutput'
      }
    ]
  },
  {
    type: 'MOVE_KNOB',
    id: 2,
    value: 0.21
  }
];
