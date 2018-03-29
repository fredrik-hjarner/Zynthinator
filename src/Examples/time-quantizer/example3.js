import { importHistory } from 'redux/ReduxHistory';

let history;

export const example3 = () => {
  importHistory(history, 0);
};

history =
[
  {
    type: 'CREATE_NODE',
    name: '',
    nodeType: 'Noise'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    lowestInput: -1,
    highestInput: 1,
    lowestOutput: 0,
    highestOutput: 2400,
    nodeType: 'ChangeRange'
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
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
    type: 'CREATE_NODE',
    name: '',
    frequency: 220,
    detune: 0,
    oscillatorType: 'square',
    minValue: -1,
    maxValue: 1,
    nodeType: 'Oscillator'
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      5
    ],
    childNodes: [
      {
        nodeId: 6,
        input: 'detune'
      }
    ]
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
    type: 'MOVE_KNOB',
    id: 1,
    value: 0.17329533007064898
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'bitsToRecord',
    value: '7'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    milliseconds: 100,
    nodeType: 'TimeQuantizer'
  },
  {
    type: 'INJECT_NODE',
    payload: {
      nodeId: 7,
      connectionId: 2
    }
  },
  {
    type: 'CREATE_KNOB',
    name: 'TimeQuantizer.milliseconds',
    connectedToWhichNode: 7,
    connectedToWhichParam: 'milliseconds',
    minValue: 0,
    maxValue: 1000,
    step: 0.01,
    function: 'linear'
  },
  {
    type: 'MOVE_KNOB',
    id: 2,
    value: 552.06
  },
  {
    type: 'OPEN_MODAL',
    modal: 'DeleteKnobModal'
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'DELETE_KNOB',
    payload: {
      ids: [
        2
      ]
    }
  },
  {
    type: 'CREATE_NODE',
    name: 'sine-that-sets-milliseconds',
    frequency: 0.15,
    detune: 0,
    oscillatorType: 'sine',
    minValue: 10,
    maxValue: 400,
    nodeType: 'Oscillator'
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      9
    ],
    childNodes: [
      {
        nodeId: 7,
        input: 'milliseconds'
      }
    ]
  },
  {
    type: 'CREATE_NODE',
    name: '',
    nodeType: 'TimeDomainAnalyser'
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      7
    ],
    childNodes: [
      {
        nodeId: 10,
        input: 'input'
      }
    ]
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'bitsToRecord',
    value: '15'
  }
];
