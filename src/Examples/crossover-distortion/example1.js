import { importHistory } from 'redux/ReduxHistory';

let history;

export const example1 = () => {
  importHistory(history, 0);
};

history =
[
  {
    type: '@@INIT'
  },
  {
    type: '@@router/LOCATION_CHANGE',
    payload: {
      pathname: '/synth',
      search: '',
      hash: ''
    }
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    frequency: 440,
    detune: 0,
    oscillatorType: 'sine',
    minValue: -1,
    maxValue: 1,
    nodeType: 'Oscillator'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateConnectionModal'
  },
  {
    type: 'CLOSE_MODAL'
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
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'bitsToRecord',
    value: '8'
  },
  {
    type: 'MOVE_KNOB',
    id: 1,
    value: 0.14571314513188285
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateConnectionModal'
  },
  {
    type: 'CLOSE_MODAL'
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
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'CrossoverDistortion'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    threshold: 0,
    nodeType: 'CrossoverDistortion'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateConnectionModal'
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'InjectNodeModal'
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'INJECT_NODE',
    payload: {
      nodeId: 5,
      connectionId: 2
    }
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateKnobModal'
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_KNOB',
    name: 'threshold',
    connectedToWhichNode: 5,
    connectedToWhichParam: 'threshold',
    minValue: 0,
    maxValue: 1,
    step: 0.01,
    func: 'linear'
  }
];
