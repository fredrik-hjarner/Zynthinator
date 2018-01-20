import {
  importHistory,
} from '../redux';

let history;

export const amplitudeModulatedSine =
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
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator',
    },
  },
  {
    type: 'CLOSE_MODAL',
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
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator',
    },
  },
  {
    type: 'CLOSE_MODAL',
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
    name: 'TDA',
    nodeType: 'TimeDomainAnalyser',
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateConnectionModal',
  },
  {
    type: 'CLOSE_MODAL',
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
    type: 'OPEN_MODAL',
    modal: 'CreateConnectionModal',
  },
  {
    type: 'CLOSE_MODAL',
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
    type: 'OPEN_MODAL',
    modal: 'CreateConnectionModal',
  },
  {
    type: 'CLOSE_MODAL',
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
    type: 'OPEN_MODAL',
    modal: 'CreateKnobModal',
  },
  {
    type: 'CLOSE_MODAL',
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
    type: 'MOVE_KNOB',
    id: 2,
    value: 1,
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateKnobModal',
  },
  {
    type: 'CLOSE_MODAL',
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
    type: 'MOVE_KNOB',
    id: 3,
    value: 0,
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
    type: 'OPEN_MODAL',
    modal: 'CreateKnobModal',
  },
  {
    type: 'CLOSE_MODAL',
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
    type: 'MOVE_KNOB',
    id: 4,
    value: 0,
  },
  {
    type: 'OPEN_MODAL',
    modal: 'EditNodeModal',
  },
  {
    type: 'CLOSE_MODAL',
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
    type: 'MOVE_KNOB',
    id: 4,
    value: 2.3305,
  },
  {
    type: 'MOVE_KNOB',
    id: 3,
    value: 0,
  },
  {
    type: 'MOVE_KNOB',
    id: 4,
    value: 0.9746,
  },
];
