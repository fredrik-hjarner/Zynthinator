import {
  importHistory,
} from '../redux';

let history;

export const example2 =
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
      key: '41bwt0'
    }
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
    name: 'TDA',
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
      nodeType: 'Oscillator'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: 'square_0Hz',
    frequency: 0,
    detune: 0,
    oscillatorType: 'square',
    minValue: -1,
    maxValue: 1,
    gain: 1,
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
      3
    ],
    childNodes: [
      {
        nodeId: 2,
        input: 'input'
      }
    ]
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'LowResolutionSine'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: 'low-res-sine',
    frequency: 0.5,
    levels: 12,
    minValue: 0,
    maxValue: 1200,
    gain: 1,
    nodeType: 'LowResolutionSine'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'EditNodeModal'
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator',
      node: {
        id: 3,
        name: 'square_0Hz',
        frequency: 0,
        detune: 0,
        oscillatorType: 'square',
        minValue: -1,
        maxValue: 1,
        gain: 1,
        nodeType: 'Oscillator'
      }
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    id: 3,
    name: 'square_440Hz',
    frequency: 0,
    detune: 0,
    oscillatorType: 'square',
    minValue: -1,
    maxValue: 1,
    gain: 1,
    nodeType: 'Oscillator'
  },
  {
    type: 'MOVE_KNOB',
    id: 1,
    value: 0.16846455139151761
  },
  {
    type: 'OPEN_MODAL',
    modal: 'EditNodeModal'
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'LowResolutionSine',
      node: {
        id: 4,
        name: 'low-res-sine',
        frequency: 0.5,
        levels: 12,
        minValue: 0,
        maxValue: 1200,
        gain: 1,
        nodeType: 'LowResolutionSine'
      }
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'EditNodeModal'
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'LowResolutionSine',
      node: {
        id: 4,
        name: 'low-res-sine',
        frequency: 0.5,
        levels: 12,
        minValue: 0,
        maxValue: 1200,
        gain: 1,
        nodeType: 'LowResolutionSine'
      }
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'EditNodeModal'
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator',
      node: {
        id: 3,
        name: 'square_440Hz',
        frequency: 0,
        detune: 0,
        oscillatorType: 'square',
        minValue: -1,
        maxValue: 1,
        gain: 1,
        nodeType: 'Oscillator'
      }
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    id: 3,
    name: 'square_440Hz',
    frequency: 440,
    detune: 0,
    oscillatorType: 'square',
    minValue: -1,
    maxValue: 1,
    gain: 1,
    nodeType: 'Oscillator'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'bitsToRecord',
    value: '5'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'millisecondsBetweenUpdates',
    value: '10'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'bitsToRecord',
    value: '9'
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
        nodeId: 3,
        input: 'detune'
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
      '4'
    ]
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'LowResolutionSine'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: 'low-res-sine',
    frequency: 0.3,
    levels: 6,
    minValue: 0,
    maxValue: 12000,
    gain: 1,
    nodeType: 'LowResolutionSine'
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
        nodeId: 3,
        input: 'detune'
      }
    ]
  },
  {
    type: 'OPEN_MODAL',
    modal: 'EditNodeModal'
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'LowResolutionSine',
      node: {
        id: 5,
        name: 'low-res-sine',
        frequency: 0.3,
        levels: 6,
        minValue: 0,
        maxValue: 12000,
        gain: 1,
        nodeType: 'LowResolutionSine'
      }
    }
  },
  {
    type: 'CLOSE_MODAL'
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
      '5'
    ]
  },
  {
    type: 'MOVE_KNOB',
    id: 1,
    value: 0.2008513107939738
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
      key: '41bwt0'
    }
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'LowResolutionSine'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: 'low-res-sine_0.2Hz',
    frequency: 0.2,
    levels: 12,
    minValue: 0,
    maxValue: 2400,
    gain: 1,
    nodeType: 'LowResolutionSine'
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
        nodeId: 3,
        input: 'detune'
      }
    ]
  },
  {
    type: 'OPEN_MODAL',
    modal: 'DeleteConnectionModal'
  },
  {
    type: 'CLOSE_MODAL'
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
    name: 'TDA2',
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
    param: 'maxValue',
    value: '2400'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'millisecondsBetweenUpdates',
    value: '50'
  }
];
