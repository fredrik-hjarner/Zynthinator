import { importHistory } from 'redux/ReduxHistory';

let history;

export const example2 =
	() => {
		importHistory(history, 0);
	};

history =
[
	{
		type: 'CREATE_NODE',
		name: '',
		frequency: 1,
		detune: 0,
		oscillatorType: 'sine',
		minValue: -1,
		maxValue: 1,
		nodeType: 'Oscillator',
	},
	{
		type: 'CREATE_NODE',
		name: '',
		nodeType: 'TimeDomainAnalyser',
	},
	{
		type: 'CREATE_NODE',
		name: '',
		nodeType: 'TimeDomainAnalyser',
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			4,
		],
		childNodes: [
			{
				nodeId: 2,
				input: 'input',
			},
		],
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 1,
		param: 'bitsToRecord',
		value: '15',
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 2,
		param: 'bitsToRecord',
		value: '15',
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 3,
		param: 'bitsToRecord',
		value: '15',
	},
	{
		type: 'CREATE_NODE',
		name: '',
		delayTime: 0,
		nodeType: 'Delay',
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			4,
		],
		childNodes: [
			{
				nodeId: 7,
				input: 'input',
			},
		],
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			7,
		],
		childNodes: [
			{
				nodeId: 5,
				input: 'input',
			},
		],
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			2,
			5,
		],
		childNodes: [
			{
				nodeId: 6,
				input: 'input',
			},
		],
	},
	{
		type: 'CREATE_NODE',
		name: 'sine-that-modulates-delay',
		frequency: 0,
		detune: 0,
		oscillatorType: 'sine',
		minValue: 0,
		maxValue: 1,
		nodeType: 'Oscillator',
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			8,
		],
		childNodes: [
			{
				nodeId: 7,
				input: 'delayTime',
			},
		],
	},
	{
		type: 'CREATE_KNOB',
		payload: {
			name: 'maximal-phase-shift',
			connectedToWhichNode: 7,
			connectedToWhichParam: 'delayTime',
			minValue: 0,
			maxValue: 1,
			func: 'linear',
			step: 0.01,
		},
	},
	{
		type: 'CREATE_KNOB',
		name: 'delay-modulator-frequency',
		payload: {
			connectedToWhichNode: 8,
			connectedToWhichParam: 'frequency',
			minValue: 0,
			maxValue: 100,
			func: 'exponential',
			step: 0.01,
		},
	},
	{
		type: 'MOVE_KNOB',
		id: 3,
		value: 0.08457896429617764,
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 3,
		param: 'maxValue',
		value: '2',
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 3,
		param: 'minValue',
		value: '-2',
	},
	{
		type: 'MOVE_KNOB',
		id: 2,
		value: 0.5426,
	},
	{
		type: 'MOVE_KNOB',
		id: 3,
		value: 0.9476503203300282,
	},
	{
		type: 'MOVE_KNOB',
		id: 2,
		value: 0.585,
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 43.9930579662323,
			y: 420.9896125793457,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 235.00000834465027,
			y: 411.9965400695801,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 43.9930579662323,
			y: 466.9965705871582,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 220.98958659172058,
			y: 445.9896125793457,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 507.98613810539246,
			y: 80.00000381469727,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 638.993096113205,
			y: 435.9896125793457,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 278.99306559562683,
			y: 88.99306106567383,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 758.984375,
			y: 295,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 365,
			y: 57.98828125,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 355.99609375,
			y: 458.984375,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 10,
			x: 915.99609375,
			y: 107.98828125,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 9,
			x: 58.984375,
			y: 310,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 8,
			x: 117.98828125,
			y: 172.98828125,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 852.98828125,
			y: 300,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 36,
			y: 631,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 204,
			y: 640,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 9,
			x: 55,
			y: 515,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 8,
			x: 76,
			y: 289,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 462,
			y: 56,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 460,
			y: 435,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 311,
			y: 430,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 8,
			x: 30,
			y: 340,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 31,
			y: 111,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 213,
			y: 315,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 389,
			y: 316,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 388,
			y: 56,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 10,
			x: 858,
			y: 49,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 821,
			y: 194,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 8,
			x: 31,
			y: 340,
		},
	},
	{
		type: 'MOVE_KNOB',
		id: 3,
		value: 50.087492843257444,
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			10,
		],
		childNodes: [
			{
				nodeId: 8,
				input: 'frequency',
			},
		],
	},
	{
		type: 'MOVE_KNOB',
		id: 3,
		value: 0.048127523092172705,
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 10,
			x: 135,
			y: 12,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 416,
			y: 56,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 426,
			y: 315,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 283,
			y: 316,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 8,
			x: 117,
			y: 337,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 10,
			x: -25,
			y: 273,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 111,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 857,
			y: 191,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 460,
			y: 56,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 469,
			y: 315,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 327,
			y: 314,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 8,
			x: 170,
			y: 335,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 10,
			x: 17,
			y: 330,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 8,
			x: 170,
			y: 335,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 10,
			x: 16,
			y: 339,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 8,
			x: 170,
			y: 341,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 327,
			y: 314,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 9,
			x: 189,
			y: 516,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 8,
			x: 170,
			y: 341,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 10,
			x: 16,
			y: 339,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 9,
			x: 36,
			y: 514,
		},
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			9,
		],
		childNodes: [
			{
				nodeId: 8,
				input: 'gain',
			},
		],
	},
	{
		type: 'MOVE_KNOB',
		id: 2,
		value: 1,
	},
	{
		type: 'MOVE_KNOB',
		id: 3,
		value: 1.379114944327823,
	},
	{
		type: 'MOVE_KNOB',
		id: 2,
		value: 0.2,
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 9,
			x: 17,
			y: 496,
		},
	},
	{
		type: 'MOVE_KNOB',
		id: 2,
		value: 1,
	},
	{
		type: 'DELETE_CONNECTION',
		payload: {
			ids: [
				9,
			],
		},
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			9,
		],
		childNodes: [
			{
				nodeId: 7,
				input: 'delayTime',
			},
		],
	},
	{
		type: 'MOVE_KNOB',
		id: 2,
		value: 0,
	},
	{
		type: 'DELETE_CONNECTION',
		payload: {
			ids: [
				7,
			],
		},
	},
	{
		type: 'DELETE_CONNECTION',
		payload: {
			ids: [
				10,
			],
		},
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			8,
		],
		childNodes: [
			{
				nodeId: 7,
				input: 'delayTime',
			},
		],
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			9,
		],
		childNodes: [
			{
				nodeId: 8,
				input: 'gain',
			},
		],
	},
	{
		type: 'MOVE_KNOB',
		id: 3,
		value: 1.03769176115303,
	},
	{
		type: 'MOVE_KNOB',
		id: 2,
		value: 1,
	},
	{
		type: 'MOVE_KNOB',
		id: 3,
		value: 0.08073177011441458,
	},
	{
		type: 'MOVE_KNOB',
		id: 2,
		value: 0.11,
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 8,
			x: 170,
			y: 341,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 111,
			y: 57,
		},
	},
	{
		type: 'MOVE_KNOB',
		id: 2,
		value: 1,
	},
	{
		type: 'MOVE_KNOB',
		id: 3,
		value: 10.093316720297505,
	},
	{
		type: 'MOVE_KNOB',
		id: 2,
		value: 0.26,
	},
	{
		type: 'MOVE_KNOB',
		id: 3,
		value: 4.753237096141693,
	},
];
