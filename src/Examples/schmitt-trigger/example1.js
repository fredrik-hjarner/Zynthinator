import { importHistory } from 'redux/ReduxHistory';

let history;

export const example1 =
  () => {
    importHistory(history, 0);
  };

history =
[
  {
    "type": "CREATE_NODE",
    "name": "",
    "nodeType": "TimeDomainAnalyser"
  },
  {
    "type": "CREATE_NODE",
    "name": "unityGain",
    "gain": 1,
    "nodeType": "Gain"
  },
  {
    "type": "CREATE_NODE",
    "name": "",
    "threshold": 0,
    "nodeType": "SchmittTrigger"
  },
  {
    "type": "CREATE_CONNECTION",
    "name": "",
    "parentNodeIds": [
      5
    ],
    "childNodes": [
      {
        "nodeId": 2,
        "input": "input"
      }
    ]
  },
  {
    "type": "CREATE_CONNECTION",
    "name": "",
    "parentNodeIds": [
      6
    ],
    "childNodes": [
      {
        "nodeId": 4,
        "input": "input"
      }
    ]
  },
  {
    "type": "CREATE_CONNECTION",
    "name": "",
    "parentNodeIds": [
      5
    ],
    "childNodes": [
      {
        "nodeId": 6,
        "input": "input"
      }
    ]
  },
  {
    "type": "CREATE_KNOB",
    "payload": {
      "name": "schmitt-trigger-input",
      "connectedToWhichNode": 5,
      "connectedToWhichParam": "input",
      "minValue": 0,
      "maxValue": 1,
      "func": "linear",
      "step": 0.01
    }
  },
  {
    "type": "CREATE_KNOB",
    "payload": {
      "name": "threshold",
      "connectedToWhichNode": 6,
      "connectedToWhichParam": "threshold",
      "minValue": 0,
      "maxValue": 0.5,
      "func": "linear",
      "step": 0.01
    }
  },
  {
    "type": "UI_TD_ANALYSER_CHANGE_PARAMS",
    "id": 1,
    "param": "maxValue",
    "value": "1.1"
  },
  {
    "type": "UI_TD_ANALYSER_CHANGE_PARAMS",
    "id": 1,
    "param": "minValue",
    "value": "-0.1"
  },
  {
    "type": "UI_TD_ANALYSER_CHANGE_PARAMS",
    "id": 2,
    "param": "maxValue",
    "value": "1.1"
  },
  {
    "type": "UI_TD_ANALYSER_CHANGE_PARAMS",
    "id": 2,
    "param": "minValue",
    "value": "-0.1"
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 176,
      "y": 509
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 4,
      "x": 693,
      "y": 146
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 6,
      "x": 458,
      "y": 158
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 4,
      "x": 749,
      "y": 146
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 6,
      "x": 524,
      "y": 158
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 314,
      "y": 300
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 7,
      "x": 62,
      "y": 372
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 4,
      "x": 852,
      "y": 153
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 6,
      "x": 649,
      "y": 145
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 400,
      "y": 330
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 5,
      "x": 313,
      "y": 177
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 1,
      "x": 28,
      "y": 16
    }
  },
  {
    "type": "MOVE_KNOB",
    "id": 3,
    "value": 0.35
  },
  {
    "type": "MOVE_KNOB",
    "id": 2,
    "value": 0.66
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 502,
      "y": 214
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 5,
      "x": 216,
      "y": 171
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 361,
      "y": 468
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 488,
      "y": 250
    }
  },
  {
    "type": "CREATE_CONNECTION",
    "name": "",
    "parentNodeIds": [
      8
    ],
    "childNodes": [
      {
        "nodeId": 6,
        "input": "threshold"
      }
    ]
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 468,
      "y": 244
    }
  },
  {
    "type": "CREATE_CONNECTION",
    "name": "",
    "parentNodeIds": [
      7
    ],
    "childNodes": [
      {
        "nodeId": 5,
        "input": "input"
      }
    ]
  },
  {
    "type": "MOVE_KNOB",
    "id": 2,
    "value": 0.24
  },
  {
    "type": "MOVE_KNOB",
    "id": 3,
    "value": 0.23
  },
  {
    "type": "MOVE_KNOB",
    "id": 2,
    "value": 0.85
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 5,
      "x": 218,
      "y": 229
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 490,
      "y": 271
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 5,
      "x": 224,
      "y": 326
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 383,
      "y": 458
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 501,
      "y": 281
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 6,
      "x": 665,
      "y": 150
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 483,
      "y": 62
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 476,
      "y": 361
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 1,
      "x": 635,
      "y": 257.98828125
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 415,
      "y": 75.99609375
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 7,
      "x": 30.99609375,
      "y": 426.9921875
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 5,
      "x": 146.9921875,
      "y": 212.98828125
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 6,
      "x": 643.984375,
      "y": 5
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 483.984375,
      "y": 118.984375
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 3,
      "x": 211.9921875,
      "y": 717.98828125
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 1,
      "x": 395,
      "y": 697.98828125
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 4,
      "x": 815,
      "y": 66.9921875
    }
  },
  {
    "type": "MOVE_KNOB",
    "id": 2,
    "value": 1
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 5,
      "x": 210.99609375,
      "y": 207.98828125
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 7,
      "x": 38.984375,
      "y": 205
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 5,
      "x": 210.99609375,
      "y": 207.98828125
    }
  },
  {
    "type": "DELETE_NODE",
    "nodes": [
      5
    ]
  },
  {
    "type": "CREATE_CONNECTION",
    "name": "",
    "parentNodeIds": [
      7
    ],
    "childNodes": [
      {
        "nodeId": 6,
        "input": "input"
      }
    ]
  },
  {
    "type": "CREATE_CONNECTION",
    "name": "",
    "parentNodeIds": [
      7
    ],
    "childNodes": [
      {
        "nodeId": 2,
        "input": "input"
      }
    ]
  },
  {
    "type": "MOVE_KNOB",
    "id": 2,
    "value": 0.17
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 7,
      "x": 40.99609375,
      "y": 140
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 473.984375,
      "y": 397.98828125
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 6,
      "x": 377.98828125,
      "y": 30
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 335.99609375,
      "y": 155
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 490.99609375,
      "y": 410
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 4,
      "x": 560,
      "y": 28.984375
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 555.99609375,
      "y": 348.984375
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 6,
      "x": 347.98828125,
      "y": 498.984375
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 4,
      "x": 588.984375,
      "y": 680.99609375
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 145,
      "y": 538.984375
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 371.9921875,
      "y": 57.98828125
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 6,
      "x": 241.9921875,
      "y": 380
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 58.984375,
      "y": 407.98828125
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 4,
      "x": 408.984375,
      "y": 380.99609375
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 417.98828125,
      "y": 57.98828125
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 3,
      "x": 120,
      "y": 707.98828125
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 1,
      "x": 295,
      "y": 686.9921875
    }
  },
  {
    "type": "MOVE_KNOB",
    "id": 2,
    "value": 0.61
  }
];
