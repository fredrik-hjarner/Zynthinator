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
      pathname: '/',
      search: '',
      hash: ''
    }
  },
  {
    type: '@@router/LOCATION_CHANGE',
    payload: {
      pathname: '/synth',
      search: '',
      hash: '',
      key: 'cerari'
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
    type: 'MOVE_KNOB',
    id: 1,
    value: 0.12242500570857913
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator',
      node: {
        id: 4,
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
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'ADSR'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    A: 0.1,
    D: 0,
    S: 1,
    R: 0.9,
    nodeType: 'ADSR'
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
        nodeId: 4,
        input: 'gain'
      }
    ]
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'PWM'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    frequency: 0.3,
    dutyCycle: 0.1,
    minValue: 0,
    maxValue: 1,
    nodeType: 'PWM'
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
        nodeId: 5,
        input: 'play'
      }
    ]
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'bitsToRecord',
    value: '12'
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
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'bitsToRecord',
    value: '14'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'maxValue',
    value: '1.1'
  },
  {
    type: '@@INIT'
  },
  {
    type: '@@router/LOCATION_CHANGE',
    payload: {
      pathname: '/synth',
      search: '',
      hash: '',
      key: '3frd8y'
    }
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'bitsToRecord',
    value: '15'
  }
];
