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
    name: 'delayed-sine',
    nodeType: 'TimeDomainAnalyser'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    nodeType: 'TimeDomainAnalyser'
  },
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
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      6
    ],
    childNodes: [
      {
        nodeId: 2,
        input: 'input'
      }
    ]
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'bitsToRecord',
    value: '7'
  },
  {
    type: 'CREATE_NODE',
    id: 6,
    name: 'sine',
    frequency: 1,
    detune: 0,
    oscillatorType: 'sine',
    minValue: -1,
    maxValue: 1,
    nodeType: 'Oscillator'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'bitsToRecord',
    value: '15'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    delayTime: 0,
    nodeType: 'Delay'
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      6
    ],
    childNodes: [
      {
        nodeId: 7,
        input: 'input'
      }
    ]
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      7
    ],
    childNodes: [
      {
        nodeId: 4,
        input: 'input'
      }
    ]
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'bitsToRecord',
    value: '15'
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      2,
      4
    ],
    childNodes: [
      {
        nodeId: 5,
        input: 'input'
      }
    ]
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 3,
    param: 'bitsToRecord',
    value: '15'
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 5,
      x: 561,
      y: 319
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 87,
      y: 421
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 2,
      x: 208,
      y: 71
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 5,
      x: 978,
      y: 210
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 2,
      x: 504,
      y: 10
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 565,
      y: 394
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 7,
      x: 359,
      y: 391
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 6,
      x: 138,
      y: 169
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 1,
      x: 161,
      y: 521
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 3,
      x: 0,
      y: 501
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 1,
      x: 239,
      y: 565
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 3,
      x: 68,
      y: 592
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 7,
      x: 359,
      y: 391
    }
  },
  {
    type: 'DELETE_CONNECTION',
    payload: {
      ids: [
        1
      ]
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 3,
      x: 68,
      y: 493
    }
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      3
    ],
    childNodes: [
      {
        nodeId: 7,
        input: 'delayTime'
      }
    ]
  },
  {
    type: 'MOVE_KNOB',
    id: 1,
    value: 0.49658524712551455
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 3,
      x: 161,
      y: 418
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 1,
      x: 27.98828125,
      y: 18.984375
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 6,
      x: 32.98828125,
      y: 162.98828125
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 3,
      x: 50,
      y: 411.9921875
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 7,
      x: 230,
      y: 342.98828125
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 2,
      x: 287.98828125,
      y: 12.98828125
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 400.99609375,
      y: 342.98828125
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 5,
      x: 800.99609375,
      y: 192.98828125
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 2,
      x: 250.99609375,
      y: 21.9921875
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 6,
      x: 17.98828125,
      y: 147.98828125
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 3,
      x: 16.9921875,
      y: 370.99609375
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 7,
      x: 200.99609375,
      y: 342.98828125
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 353.984375,
      y: 340
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 5,
      x: 755,
      y: 185.99609375
    }
  }
];
