import { importHistory } from 'redux/ReduxHistory';

let history;

export const example1 =
  () => {
    importHistory(history, 0);
  };

history =
[
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
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 551,
      y: 274
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 2,
      x: 806,
      y: 260
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 1,
      x: 1255,
      y: 167
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 3,
      x: 1186,
      y: 338
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 4,
      x: 41,
      y: 189
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 2,
      x: 245,
      y: 193
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 1,
      x: 881,
      y: 208
    }
  },
  {
    type: 'MOVE_GRAPH_NODE',
    payload: {
      nodeId: 3,
      x: 684,
      y: 289
    }
  }
];
