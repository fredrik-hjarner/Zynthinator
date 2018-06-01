import { importHistory } from 'redux/ReduxHistory';

let history;

export const example2 =
  () => {
    importHistory(history, 0);
  };

history =
[
  {
    type: 'CREATE_NODE',
    name: 'sine',
    frequency: 440,
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
    value: '7'
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
    A: 0.05,
    D: 0,
    S: 1,
    R: 0.9,
    nodeType: 'ADSR'
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      5
    ],
    childNodes: [
      {
        nodeId: 4,
        input: 'gain'
      }
    ]
  },
  {
    type: 'CREATE_KNOB',
    name: 'ADSR.play',
    payload: {
      connectedToWhichNode: 5,
      connectedToWhichParam: 'play',
      minValue: 0,
      maxValue: 1,
      func: 'linear',
      step: 0.01
    }
  },
  {
    type: 'MOVE_KNOB',
    id: 2,
    value: 1
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 6,
      x: 657,
      y: 194
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 5,
      x: 657,
      y: 46
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 588,
      y: 370
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 2,
      x: 911,
      y: 329
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 3,
      x: 189,
      y: 460
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 1,
      x: 1293,
      y: 87
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 414,
      y: 236
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 5,
      x: 25,
      y: 127
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 182,
      y: 70
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 5,
      x: 19,
      y: 122
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 3,
      x: 1027,
      y: 109
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 6,
      x: 205,
      y: 393
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 299,
      y: 69
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 5,
      x: 143,
      y: 122
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 6,
      x: -4,
      y: 124
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 352,
      y: 70
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 5,
      x: 182,
      y: 122
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 6,
      x: 15,
      y: 120
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
        input: 'play'
      }
    ]
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 6,
      x: 16,
      y: 121
    }
  },
  {
    type: 'MOVE_KNOB',
    id: 2,
    value: 1
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 2,
      x: 564,
      y: 71
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 3,
      x: 887,
      y: 368
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 1,
      x: 994,
      y: 70
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 3,
      x: 846,
      y: 358
    }
  }
];
