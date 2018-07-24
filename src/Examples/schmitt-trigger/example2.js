import { importHistory } from 'redux/ReduxHistory';

let history;

export const example2 =
  () => {
    importHistory(history, 0);
  };

history =
[
  {
    "type": "CREATE_NODE",
    "name": "sine",
    "frequency": 10,
    "detune": 0,
    "oscillatorType": "sine",
    "minValue": 0,
    "maxValue": 1,
    "nodeType": "Oscillator"
  },
  {
    "type": "CREATE_CONNECTION",
    "name": "",
    "parentNodeIds": [
      4
    ],
    "childNodes": [
      {
        "nodeId": 2,
        "input": "input"
      }
    ]
  },
  {
    "type": "UI_TD_ANALYSER_CHANGE_PARAMS",
    "id": 1,
    "param": "bitsToRecord",
    "value": "15"
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
    "type": "CREATE_NODE",
    "name": "",
    "threshold": 0,
    "nodeType": "SchmittTrigger"
  },
  {
    "type": "CREATE_NODE",
    "name": "",
    "nodeType": "TimeDomainAnalyser"
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
    "type": "CREATE_CONNECTION",
    "name": "",
    "parentNodeIds": [
      4
    ],
    "childNodes": [
      {
        "nodeId": 5,
        "input": "input"
      }
    ]
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
    "type": "UI_TD_ANALYSER_CHANGE_PARAMS",
    "id": 2,
    "param": "millisecondsBetweenUpdates",
    "value": "40"
  },
  {
    "type": "UI_TD_ANALYSER_CHANGE_PARAMS",
    "id": 2,
    "param": "bitsToRecord",
    "value": "15"
  },
  {
    "type": "UI_TD_ANALYSER_CHANGE_PARAMS",
    "id": 2,
    "param": "millisecondsBetweenUpdates",
    "value": "100"
  },
  {
    "type": "UI_TD_ANALYSER_CHANGE_PARAMS",
    "id": 1,
    "param": "millisecondsBetweenUpdates",
    "value": "100"
  },
  {
    "type": "CREATE_KNOB",
    "payload": {
      "name": "sine-gain",
      "connectedToWhichNode": 4,
      "connectedToWhichParam": "gain",
      "minValue": 0,
      "maxValue": 1,
      "func": "linear",
      "step": 0.01
    }
  },
  {
    "type": "MOVE_KNOB",
    "id": 2,
    "value": 1
  },
  {
    "type": "CREATE_KNOB",
    "payload": {
      "name": "schmitt-trigger-threshold",
      "connectedToWhichNode": 5,
      "connectedToWhichParam": "threshold",
      "minValue": 0,
      "maxValue": 0.5,
      "func": "linear",
      "step": 0.01
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 6,
      "x": 682,
      "y": 140
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 213,
      "y": 395
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 5,
      "x": 493,
      "y": 139
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 4,
      "x": 221,
      "y": 136
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 6,
      "x": 881,
      "y": 154
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 5,
      "x": 685,
      "y": 150
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 4,
      "x": 375,
      "y": 35
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 682,
      "y": 414
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 142,
      "y": 435
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 7,
      "x": 341,
      "y": 317
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 1,
      "x": 66,
      "y": 15
    }
  },
  {
    "type": "MOVE_KNOB",
    "id": 2,
    "value": 1
  },
  {
    "type": "MOVE_KNOB",
    "id": 3,
    "value": 0.37
  },
  {
    "type": "CREATE_CONNECTION",
    "name": "",
    "parentNodeIds": [
      8
    ],
    "childNodes": [
      {
        "nodeId": 5,
        "input": "threshold"
      }
    ]
  },
  {
    "type": "MOVE_KNOB",
    "id": 3,
    "value": 0.19
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 342,
      "y": 468
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 7,
      "x": 155,
      "y": 357
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 431,
      "y": 269
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 7,
      "x": 174,
      "y": 326
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
        "nodeId": 4,
        "input": "gain"
      }
    ]
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 7,
      "x": 187,
      "y": 306
    }
  },
  {
    "type": "MOVE_KNOB",
    "id": 2,
    "value": 0.34
  },
  {
    "type": "MOVE_KNOB",
    "id": 3,
    "value": 0.27
  },
  {
    "type": "MOVE_KNOB",
    "id": 2,
    "value": 1
  },
  {
    "type": "MOVE_KNOB",
    "id": 3,
    "value": 0.33
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 682,
      "y": 422
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 7,
      "x": 211,
      "y": 97
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 3,
      "x": 19,
      "y": 426
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 1,
      "x": 47,
      "y": 322
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 7,
      "x": 48.9930579662323,
      "y": 75.00000381469727
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 4,
      "x": 223.99306559562683,
      "y": 52.98611068725586
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 502.98613810539246,
      "y": 15.972217559814453
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 381.9965445995331,
      "y": 431.9965400695801
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 5,
      "x": 445.00002360343933,
      "y": 292.98613357543945
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 236.99654459953308,
      "y": 330.0000190734863
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 6,
      "x": 597.9861381053925,
      "y": 293.9930610656738
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 562.9861381053925,
      "y": 21.996524810791016
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 5,
      "x": 410.00002360343933,
      "y": 275.9895820617676
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 598.993096113205,
      "y": 24.999996185302734
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 6,
      "x": 595.9896171092987,
      "y": 276.9965400695801
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 2,
      "x": 596.9965751171112,
      "y": 23.993053436279297
    }
  },
  {
    "type": "MOVE_GRAPH_NODE",
    "payload": {
      "nodeId": 8,
      "x": 245.00000834465027,
      "y": 313.9930610656738
    }
  }
];
