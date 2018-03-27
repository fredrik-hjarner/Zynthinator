import { importHistory } from 'redux/ReduxHistory';

let history;

export const example2 = () => {
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
      hash: '',
      key: '0vf8xs'
    }
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Noise'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    nodeType: 'Noise'
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
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'FrequencyDomainAnalyser'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    nodeType: 'FrequencyDomainAnalyser'
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
        nodeId: 5,
        input: 'input'
      }
    ]
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'HighPassFilter'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    frequency: 350,
    nodeType: 'HighPassFilter'
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
      nodeId: 6,
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
    name: 'frequency',
    connectedToWhichNode: 6,
    connectedToWhichParam: 'frequency',
    minValue: 0,
    maxValue: 10000,
    step: 1,
    function: 'linear'
  },
  {
    type: 'MOVE_KNOB',
    id: 2,
    value: 10000
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
    name: 'Q',
    connectedToWhichNode: 6,
    connectedToWhichParam: 'Q',
    minValue: 0,
    maxValue: 100,
    step: 0.01,
    function: 'exponential'
  },
  {
    type: '@@router/LOCATION_CHANGE',
    payload: {
      pathname: '/',
      search: '',
      hash: '',
      key: 'oewuyh'
    }
  },
  {
    type: '@@router/LOCATION_CHANGE',
    payload: {
      pathname: '/',
      search: '',
      hash: '',
      key: 'iz7rmx'
    }
  },
  {
    type: '@@INIT'
  },
  {
    type: '@@router/LOCATION_CHANGE',
    payload: {
      pathname: '/',
      search: '',
      hash: '',
      key: 'iz7rmx'
    }
  },
  {
    type: '@@router/LOCATION_CHANGE',
    payload: {
      pathname: '/synth',
      search: '',
      hash: '',
      key: 'jbkexf'
    }
  },
  {
    type: 'MOVE_KNOB',
    id: 3,
    value: 21.44673903339414
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
    name: 'bypass filter',
    connectedToWhichNode: 6,
    connectedToWhichParam: 'bypass',
    minValue: 0,
    maxValue: 1,
    step: 1,
    function: 'linear'
  },
  {
    type: 'MOVE_KNOB',
    id: 4,
    value: 1
  },
  {
    type: 'MOVE_KNOB',
    id: 1,
    value: 0.4765098748902245
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
      5
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
    modal: 'DeleteNodeModal'
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'DELETE_NODE',
    nodes: [
      '2'
    ]
  },
  {
    type: 'MOVE_KNOB',
    id: 4,
    value: 0
  }
];
