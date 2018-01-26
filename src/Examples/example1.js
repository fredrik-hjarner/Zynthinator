import {
  importHistory,
} from '../redux';

let history;

export const example1 =
  () => {
    importHistory(history, 0);
  };

history =
[
  {
    type: '@@INIT',
  },
  {
    type: '@@router/LOCATION_CHANGE',
    payload: {
      pathname: '/synth',
      search: '',
      hash: '',
      key: 'l7hbhr',
    },
  },
  {
    type: 'DELETE_NODE',
    nodes: [
      '2'
    ]
  },
  {
    type: 'CALCULATE_HIGHEST_NODE_ID'
  },
  {
    type: 'CALCULATE_HIGHEST_UI_ID'
  },
  {
    type: 'CREATE_NODE',
    name: 'sine',
    frequency: 440,
    detune: 0,
    oscillatorType: 'sine',
    minValue: -1,
    maxValue: 1,
    gain: 1,
    nodeType: 'Oscillator',
  },
  {
    type: 'CREATE_NODE',
    name: 'amplitudeModulatingSine',
    frequency: 1,
    detune: 0,
    oscillatorType: 'sine',
    minValue: 0.2,
    maxValue: 1,
    gain: 1,
    nodeType: 'Oscillator',
  },
  {
    type: 'CREATE_NODE',
    name: 'TDA',
    nodeType: 'TimeDomainAnalyser',
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      4,
    ],
    childNodes: [
      {
        nodeId: 1,
        input: 'input',
      },
    ],
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      3,
    ],
    childNodes: [
      {
        nodeId: 2,
        input: 'gain',
      },
    ],
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      2,
    ],
    childNodes: [
      {
        nodeId: 4,
        input: 'input',
      },
    ],
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'bitsToRecord',
    value: '10',
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'millisecondsBetweenUpdates',
    value: '47',
  },
  {
    type: 'CREATE_KNOB',
    name: 'max',
    connectedToWhichNode: 3,
    connectedToWhichParam: 'maxValue',
    minValue: 0,
    maxValue: 1,
    function: 'linear',
  },
  {
    type: 'CREATE_KNOB',
    name: 'min',
    connectedToWhichNode: 3,
    connectedToWhichParam: 'minValue',
    minValue: 0,
    maxValue: 1,
    function: 'linear',
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'bitsToRecord',
    value: '8',
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'millisecondsBetweenUpdates',
    value: '40',
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'bitsToRecord',
    value: '10',
  },
  {
    type: 'CREATE_KNOB',
    name: 'frequency',
    connectedToWhichNode: 3,
    connectedToWhichParam: 'frequency',
    minValue: 0,
    maxValue: 10,
    function: 'linear',
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator',
      node: {
        id: 3,
        name: 'amplitudeModulatingSine',
        frequency: 0,
        detune: 0,
        oscillatorType: 'sine',
        minValue: 0,
        maxValue: 1,
        gain: 1,
        nodeType: 'Oscillator',
      },
    },
  },
  {
    type: 'CLOSE_MODAL',
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'TimeDomainAnalyser',
    },
  },
  {
    type: 'CLOSE_MODAL',
  },
  {
    type: 'CREATE_NODE',
    name: 'TDA2',
    nodeType: 'TimeDomainAnalyser',
  },
  {
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      3,
    ],
    childNodes: [
      {
        nodeId: 5,
        input: 'input',
      },
    ],
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'bitsToRecord',
    value: '5',
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'canvasWidth',
    value: '100',
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator',
      node: {
        id: 3,
        name: 'amplitudeModulatingSine',
        frequency: 0.4096,
        detune: 0,
        oscillatorType: 'sine',
        minValue: 0,
        maxValue: 0,
        gain: 1,
        nodeType: 'Oscillator',
      },
    },
  },
  {
    type: 'CLOSE_MODAL',
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'maxValue',
    value: '2',
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'minValue',
    value: '-2',
  },
  {
    type: 'MOVE_KNOB',
    id: 4,
    value: 0.6356,
  },
  {
    type: 'MOVE_KNOB',
    id: 2,
    value: 1,
  },
  {
    type: 'MOVE_KNOB',
    id: 3,
    value: 0,
  },
];
