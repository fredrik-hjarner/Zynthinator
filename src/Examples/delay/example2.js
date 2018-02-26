import { importHistory } from 'redux/ReduxHistory';

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
      key: 'ck479x'
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
    name: 'sine1',
    frequency: 440,
    detune: 0,
    oscillatorType: 'sine',
    minValue: -1,
    maxValue: 1,
    nodeType: 'Oscillator'
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
    name: 'sine2',
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
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'bitsToRecord',
    value: '8'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'millisecondsBetweenUpdates',
    value: '31'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'millisecondsBetweenUpdates',
    value: '31'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator',
      node: {
        id: 4,
        name: 'sine1',
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
    id: 4,
    name: 'sine1',
    frequency: 220,
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
    value: '9'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator',
      node: {
        id: 5,
        name: 'sine2',
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
    id: 5,
    name: 'sine2',
    frequency: 220,
    detune: 0,
    oscillatorType: 'sine',
    minValue: -1,
    maxValue: 1,
    nodeType: 'Oscillator'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'bitsToRecord',
    value: '9'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'millisecondsBetweenUpdates',
    value: '40'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'millisecondsBetweenUpdates',
    value: '40'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator',
      node: {
        id: 4,
        name: 'sine1',
        frequency: 220,
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
    id: 4,
    name: 'sine1',
    frequency: 10,
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
    value: '13'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'bitsToRecord',
    value: '13'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator',
      node: {
        id: 5,
        name: 'sine2',
        frequency: 220,
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
    id: 5,
    name: 'sine2',
    frequency: 10,
    detune: 0,
    oscillatorType: 'sine',
    minValue: -1,
    maxValue: 1,
    nodeType: 'Oscillator'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'millisecondsBetweenUpdates',
    value: '72'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator',
      node: {
        id: 4,
        name: 'sine1',
        frequency: 10,
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
    id: 4,
    name: 'sine1',
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
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'millisecondsBetweenUpdates',
    value: '40'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'bitsToRecord',
    value: '15'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Oscillator',
      node: {
        id: 5,
        name: 'sine2',
        frequency: 10,
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
    id: 5,
    name: 'sine2',
    frequency: 1,
    detune: 0,
    oscillatorType: 'sine',
    minValue: -1,
    maxValue: 1,
    nodeType: 'Oscillator'
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
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 3,
    param: 'bitsToRecord',
    value: '15'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'canvasWidth',
    value: '280'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 2,
    param: 'canvasWidth',
    value: '280'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 3,
    param: 'canvasWidth',
    value: '280'
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
      3
    ],
    childNodes: [
      {
        nodeId: 6,
        input: 'input'
      }
    ]
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 3,
    param: 'maxValue',
    value: '2'
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 3,
    param: 'minValue',
    value: '-2'
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
      key: 'ck479x'
    }
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
      key: 'ck479x'
    }
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
    modal: 'InjectNodeModal'
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'INJECT_NODE',
    payload: {
      nodeId: 7,
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
    name: 'delay in seconds',
    connectedToWhichNode: 7,
    connectedToWhichParam: 'delayTime',
    minValue: 0,
    maxValue: 1,
    function: 'linear'
  },
  {
    type: 'MOVE_KNOB',
    id: 2,
    value: 0.5
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
      key: 'ck479x'
    }
  },
  {
    type: 'MOVE_KNOB',
    id: 2,
    value: 0
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
      key: 'ck479x'
    }
  },
  {
    type: 'OPEN_MODAL',
    modal: 'DeleteKnobModal'
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'Delay',
      node: {
        id: 7,
        name: '',
        delayTime: 0,
        nodeType: 'Delay'
      }
    }
  },
  {
    type: 'CLOSE_MODAL'
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
    name: 'delay-modulator',
    frequency: 0,
    detune: 0,
    oscillatorType: 'sine',
    minValue: 0,
    maxValue: 0.5,
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
      8
    ],
    childNodes: [
      {
        nodeId: 7,
        input: 'delayTime'
      }
    ]
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
      key: 'xxcirt'
    }
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
      key: 'xxcirt'
    }
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
      key: 'xxcirt'
    }
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
      key: 'xxcirt'
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
    name: 'delay-modulator-frequency',
    connectedToWhichNode: 8,
    connectedToWhichParam: 'frequency',
    minValue: 0,
    maxValue: 100,
    function: 'exponential'
  },
  {
    type: 'MOVE_KNOB',
    id: 3,
    value: 0.4093740671243974
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
    name: 'delay-modulator-maximal-phase-shift',
    connectedToWhichNode: 8,
    connectedToWhichParam: 'gain',
    minValue: 0,
    maxValue: 1,
    function: 'linear'
  },
  {
    type: 'MOVE_KNOB',
    id: 4,
    value: 0
  },
  {
    type: 'MOVE_KNOB',
    id: 3,
    value: 6.180337458602486
  },
  {
    type: 'MOVE_KNOB',
    id: 4,
    value: 1
  },
  {
    type: 'MOVE_KNOB',
    id: 3,
    value: 0.19540421014211662
  },
  {
    type: 'MOVE_KNOB',
    id: 4,
    value: 1
  },
  {
    type: 'MOVE_KNOB',
    id: 3,
    value: 0.6199247432448853
  }
];
