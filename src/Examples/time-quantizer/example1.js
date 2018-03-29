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
      hash: '',
      key: 'fxsqhn'
    }
  },
  {
    type: 'OPEN_MODAL',
    modal: 'CreateNodeModal',
    props: {
      nodeType: 'TimeQuantizer'
    }
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'CREATE_NODE',
    name: '',
    milliseconds: 100,
    nodeType: 'TimeQuantizer'
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
    type: 'CREATE_CONNECTION',
    name: '',
    parentNodeIds: [
      5
    ],
    childNodes: [
      {
        nodeId: 4,
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
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'bitsToRecord',
    value: '15'
  },
  {
    type: 'MOVE_KNOB',
    id: 1,
    value: 0.008731850892070863
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
    name: 'timeQuantizer.milliseconds',
    connectedToWhichNode: 4,
    connectedToWhichParam: 'milliseconds',
    minValue: 0,
    maxValue: 30,
    step: 0.01,
    function: 'exponential'
  },
  {
    type: 'MOVE_KNOB',
    id: 2,
    value: 38.40818581215401
  },
  {
    type: 'MOVE_KNOB',
    id: 1,
    value: 1
  },
  {
    type: 'MOVE_KNOB',
    id: 2,
    value: 0
  },
  {
    type: 'MOVE_KNOB',
    id: 1,
    value: 0.35153483632010735
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
    type: 'MOVE_KNOB',
    id: 2,
    value: 0.002448781047255219
  },
  {
    type: 'MOVE_KNOB',
    id: 1,
    value: 1
  },
  {
    type: 'MOVE_KNOB',
    id: 2,
    value: 0.007084404886481564
  },
  {
    type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
    id: 1,
    param: 'bitsToRecord',
    value: '12'
  }
];
