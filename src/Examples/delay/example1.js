import { importHistory } from 'redux/ReduxHistory';

let history;

export const example1 =
  () => {
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
      key: 'upjyfe'
    }
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'TimeDomainAnalyser'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: 'delayed-sine',
    nodeType: 'TimeDomainAnalyser'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'TimeDomainAnalyser'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    nodeType: 'TimeDomainAnalyser'
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
    name: 'sine',
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
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator',
      node: {
        id: 6,
        name: 'sine',
        frequency: 440,
        detune: 0,
        oscillatorType: 'sine',
        minValue: -1,
        maxValue: 1,
        nodeType: 'Oscillator'
      }
    }
  },
  {
    type: 'CLOSE_MODAL'
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
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Delay'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    delayTime: 0,
    nodeType: 'Delay'
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
  }
];
