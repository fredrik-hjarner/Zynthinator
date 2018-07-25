import { History } from 'types';

// tslint:disable object-literal-sort-keys

export const example1: History =
[
	{
		type: '@@INIT',
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateNodeModal',
		props: {
			nodeType: 'Oscillator',
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_NODE',
		name: 'sine',
		frequency: 440,
		detune: 0,
		oscillatorType: 'sine',
		minValue: -1,
		maxValue: 1,
		nodeType: 'Oscillator',
	},
	{
		type: 'MOVE_KNOB',
		id: 1,
		value: 0.13306486449007918,
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateConnectionModal',
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			2,
		],
		childNodes: [
			{
				nodeId: 1,
				input: 'input',
			},
		],
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateConnectionModal',
	},
	{
		type: 'CLOSE_MODAL',
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
		type: 'MOVE_KNOB',
		id: 1,
		value: 0.12242500570857913,
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
				nodeType: 'Oscillator',
			},
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'MOVE_KNOB',
		id: 1,
		value: 0.11232252824720639,
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 1,
		param: 'bitsToRecord',
		value: '7',
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 1,
		param: 'millisecondsBetweenUpdates',
		value: '50',
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateNodeModal',
		props: {
			nodeType: 'ADSR',
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_NODE',
		name: '',
		A: 0.1,
		D: 0,
		S: 1,
		R: 0.9,
		nodeType: 'ADSR',
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateConnectionModal',
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			5,
		],
		childNodes: [
			{
				nodeId: 4,
				input: 'gain',
			},
		],
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateNodeModal',
		props: {
			nodeType: 'PWM',
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_NODE',
		name: '',
		frequency: 0.3,
		dutyCycle: 0.1,
		minValue: 0,
		maxValue: 1,
		nodeType: 'PWM',
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateConnectionModal',
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			6,
		],
		childNodes: [
			{
				nodeId: 5,
				input: 'play',
			},
		],
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 1,
		param: 'bitsToRecord',
		value: '12',
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateNodeModal',
		props: {
			nodeType: 'TimeDomainAnalyser',
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_NODE',
		name: '',
		nodeType: 'TimeDomainAnalyser',
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateConnectionModal',
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			6,
		],
		childNodes: [
			{
				nodeId: 7,
				input: 'input',
			},
		],
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 2,
		param: 'bitsToRecord',
		value: '14',
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 2,
		param: 'maxValue',
		value: '1.1',
	},
	{
		type: '@@INIT',
	},
	{
		type: '@@router/LOCATION_CHANGE',
		payload: {
			pathname: '/synth',
			search: '',
			hash: '',
			key: '3frd8y',
		},
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 2,
		param: 'bitsToRecord',
		value: '15',
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 1,
			y: 0,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 7,
			y: 0,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 18,
			y: 0,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 27,
			y: 0,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 58,
			y: 7,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 99,
			y: 12,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 150,
			y: 19,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 248,
			y: 32,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 320,
			y: 43,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 375,
			y: 51,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 427,
			y: 59,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 471,
			y: 66,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 508,
			y: 69,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 541,
			y: 76,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 572,
			y: 79,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 600,
			y: 84,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 622,
			y: 86,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 642,
			y: 90,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 663,
			y: 92,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 686,
			y: 95,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 718,
			y: 101,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 739,
			y: 103,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 752,
			y: 105,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 755,
			y: 105,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 756,
			y: 106,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 756,
			y: 106,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 1,
			y: 100,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 7,
			y: 100,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 18,
			y: 100,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 27,
			y: 103,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 34,
			y: 105,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 54,
			y: 115,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 86,
			y: 132,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 141,
			y: 166,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 184,
			y: 186,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 225,
			y: 211,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 273,
			y: 239,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 321,
			y: 265,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 382,
			y: 298,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 443,
			y: 335,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 498,
			y: 363,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 540,
			y: 387,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 573,
			y: 405,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 605,
			y: 422,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 625,
			y: 433,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 643,
			y: 444,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 650,
			y: 449,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 652,
			y: 450,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 653,
			y: 450,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 654,
			y: 450,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 656,
			y: 450,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 658,
			y: 450,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 660,
			y: 450,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 661,
			y: 450,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 663,
			y: 450,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 666,
			y: 450,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 667,
			y: 450,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 670,
			y: 450,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 671,
			y: 449,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 672,
			y: 448,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 672,
			y: 441,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 672,
			y: 441,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 757,
			y: 106,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 774,
			y: 106,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 795,
			y: 106,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 829,
			y: 106,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 882,
			y: 102,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 912,
			y: 97,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 939,
			y: 93,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 952,
			y: 91,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 959,
			y: 90,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 963,
			y: 89,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 965,
			y: 87,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 966,
			y: 86,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 965,
			y: 83,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 961,
			y: 78,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 955,
			y: 71,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 951,
			y: 64,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 950,
			y: 62,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 948,
			y: 61,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 948,
			y: 61,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: -1,
			y: 1,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: -1,
			y: 3,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 6,
			y: 3,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 37,
			y: 16,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 72,
			y: 26,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 91,
			y: 31,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 133,
			y: 41,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 178,
			y: 56,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 243,
			y: 72,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 282,
			y: 76,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 315,
			y: 84,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 344,
			y: 89,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 373,
			y: 92,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 399,
			y: 97,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 430,
			y: 102,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 459,
			y: 110,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 485,
			y: 116,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 509,
			y: 124,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 533,
			y: 131,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 538,
			y: 133,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 547,
			y: 135,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 554,
			y: 136,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 559,
			y: 137,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 562,
			y: 137,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 565,
			y: 137,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 573,
			y: 137,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 588,
			y: 137,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 618,
			y: 137,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 669,
			y: 137,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 749,
			y: 137,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 841,
			y: 137,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 933,
			y: 137,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1029,
			y: 137,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1104,
			y: 137,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1175,
			y: 146,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1206,
			y: 151,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1232,
			y: 156,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1249,
			y: 160,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1267,
			y: 169,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1276,
			y: 175,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1282,
			y: 181,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1285,
			y: 192,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1288,
			y: 205,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1288,
			y: 216,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1277,
			y: 234,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1255,
			y: 252,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1187,
			y: 286,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1112,
			y: 307,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 1015,
			y: 325,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 889,
			y: 328,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 743,
			y: 328,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 610,
			y: 328,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 498,
			y: 315,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 415,
			y: 293,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 354,
			y: 281,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 318,
			y: 269,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 296,
			y: 258,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 283,
			y: 248,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 274,
			y: 225,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 269,
			y: 202,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 267,
			y: 175,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 267,
			y: 146,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 273,
			y: 121,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 281,
			y: 99,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 286,
			y: 83,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 290,
			y: 70,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 292,
			y: 63,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 292,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 292,
			y: 55,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 292,
			y: 54,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 295,
			y: 50,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 297,
			y: 48,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 308,
			y: 42,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 323,
			y: 35,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 345,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 374,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 397,
			y: 21,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 424,
			y: 17,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 447,
			y: 14,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 468,
			y: 14,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 487,
			y: 14,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 510,
			y: 14,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 522,
			y: 14,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 532,
			y: 14,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 538,
			y: 16,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 546,
			y: 17,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 551,
			y: 17,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 556,
			y: 19,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 560,
			y: 19,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 561,
			y: 20,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 562,
			y: 20,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 564,
			y: 20,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 564,
			y: 20,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 565,
			y: 21,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 567,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 570,
			y: 26,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 571,
			y: 28,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 572,
			y: 30,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 574,
			y: 32,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 575,
			y: 33,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 574,
			y: 34,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 566,
			y: 33,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 564,
			y: 33,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 562,
			y: 32,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 561,
			y: 32,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 559,
			y: 32,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 556,
			y: 32,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 555,
			y: 32,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 554,
			y: 31,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 550,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 547,
			y: 27,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 542,
			y: 25,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 540,
			y: 24,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 538,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 536,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 534,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 532,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 531,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 529,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 528,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 527,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 525,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 522,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 520,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 519,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 519,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 0,
			y: -1,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 1,
			y: -1,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 4,
			y: -1,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 12,
			y: 1,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 43,
			y: 17,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 75,
			y: 28,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 119,
			y: 46,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 141,
			y: 56,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 183,
			y: 80,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 221,
			y: 103,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 269,
			y: 139,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 289,
			y: 155,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 306,
			y: 179,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 320,
			y: 198,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 331,
			y: 222,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 337,
			y: 244,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 338,
			y: 263,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 343,
			y: 282,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 343,
			y: 303,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 343,
			y: 323,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 343,
			y: 342,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 343,
			y: 369,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 343,
			y: 392,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 343,
			y: 412,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 341,
			y: 433,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 340,
			y: 448,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 335,
			y: 472,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 333,
			y: 493,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 332,
			y: 517,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 330,
			y: 542,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 327,
			y: 563,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 327,
			y: 584,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 327,
			y: 597,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 327,
			y: 608,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 327,
			y: 616,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 327,
			y: 621,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 327,
			y: 624,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 327,
			y: 624,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 2,
			y: 172,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 37,
			y: 187,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 134,
			y: 217,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 222,
			y: 245,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 239,
			y: 254,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 243,
			y: 256,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 245,
			y: 256,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 246,
			y: 257,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 247,
			y: 257,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 248,
			y: 257,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 249,
			y: 257,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 250,
			y: 258,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 252,
			y: 259,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 253,
			y: 260,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 255,
			y: 261,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 257,
			y: 263,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 258,
			y: 264,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 258,
			y: 265,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 259,
			y: 266,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 260,
			y: 267,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 261,
			y: 268,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 261,
			y: 269,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 262,
			y: 270,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 262,
			y: 271,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 263,
			y: 274,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 263,
			y: 276,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 265,
			y: 280,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 266,
			y: 284,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 267,
			y: 286,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 267,
			y: 287,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 267,
			y: 288,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 267,
			y: 288,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 1,
			y: -1,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 20,
			y: 2,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 56,
			y: 7,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 87,
			y: 12,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 122,
			y: 19,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 161,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 198,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 236,
			y: 35,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 271,
			y: 39,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 321,
			y: 56,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 347,
			y: 62,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 366,
			y: 70,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 383,
			y: 79,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 397,
			y: 86,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 405,
			y: 92,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 414,
			y: 98,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 421,
			y: 107,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 428,
			y: 114,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 436,
			y: 125,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 443,
			y: 137,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 449,
			y: 148,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 457,
			y: 170,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 463,
			y: 185,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 469,
			y: 205,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 473,
			y: 220,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 477,
			y: 234,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 480,
			y: 244,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 484,
			y: 253,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 485,
			y: 258,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 486,
			y: 262,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 488,
			y: 266,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 269,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 271,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 275,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 281,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 286,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 291,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 298,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 305,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 311,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 318,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 332,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 341,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 354,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 365,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 373,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 382,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 389,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 395,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 400,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 406,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 411,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 415,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 419,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 424,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 489,
			y: 430,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 488,
			y: 444,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 487,
			y: 454,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 486,
			y: 467,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 484,
			y: 482,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 482,
			y: 495,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 480,
			y: 508,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 480,
			y: 523,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 480,
			y: 551,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 480,
			y: 561,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 480,
			y: 578,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 480,
			y: 596,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 480,
			y: 617,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 480,
			y: 630,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 480,
			y: 653,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 480,
			y: 666,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 480,
			y: 691,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 480,
			y: 697,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 481,
			y: 715,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 483,
			y: 718,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 483,
			y: 721,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 483,
			y: 720,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 483,
			y: 703,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 480,
			y: 688,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 474,
			y: 665,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 474,
			y: 657,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 473,
			y: 649,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 473,
			y: 644,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 473,
			y: 637,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 473,
			y: 632,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 473,
			y: 627,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 473,
			y: 624,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 473,
			y: 622,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 473,
			y: 621,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 473,
			y: 619,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 473,
			y: 617,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 474,
			y: 617,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 475,
			y: 613,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 475,
			y: 613,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 2,
			y: 1,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 13,
			y: 4,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 21,
			y: 7,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 26,
			y: 8,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 41,
			y: 11,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 62,
			y: 15,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 81,
			y: 17,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 97,
			y: 21,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 110,
			y: 24,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 113,
			y: 24,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 119,
			y: 25,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 121,
			y: 26,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 123,
			y: 26,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 124,
			y: 26,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 126,
			y: 27,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 127,
			y: 28,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 129,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 135,
			y: 32,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 139,
			y: 34,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 146,
			y: 39,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 161,
			y: 47,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 175,
			y: 52,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 193,
			y: 60,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 217,
			y: 69,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 252,
			y: 85,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 307,
			y: 102,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 387,
			y: 129,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 495,
			y: 159,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 642,
			y: 210,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 868,
			y: 285,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 932,
			y: 308,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1057,
			y: 348,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1174,
			y: 382,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1229,
			y: 399,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1263,
			y: 409,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1280,
			y: 411,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1288,
			y: 413,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1294,
			y: 413,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1298,
			y: 415,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1300,
			y: 415,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1299,
			y: 415,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1293,
			y: 415,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1283,
			y: 415,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1275,
			y: 415,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1265,
			y: 412,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1257,
			y: 412,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1251,
			y: 410,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1249,
			y: 410,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1248,
			y: 410,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1230,
			y: 406,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1198,
			y: 393,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1198,
			y: 393,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 518,
			y: 24,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 495,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 467,
			y: 33,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 410,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 386,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 334,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 312,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 291,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 272,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 256,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 243,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 230,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 220,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 204,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 193,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 184,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 176,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 168,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 159,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 149,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 140,
			y: 36,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 130,
			y: 34,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 124,
			y: 33,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 119,
			y: 33,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 115,
			y: 32,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 109,
			y: 32,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 104,
			y: 30,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 94,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 90,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 86,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 83,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 81,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 78,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 73,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 68,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 63,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 60,
			y: 28,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 59,
			y: 28,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 57,
			y: 28,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 55,
			y: 28,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 54,
			y: 28,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 51,
			y: 28,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 49,
			y: 28,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 46,
			y: 27,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 42,
			y: 26,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 41,
			y: 25,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 40,
			y: 25,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 38,
			y: 25,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 37,
			y: 25,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 36,
			y: 25,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 35,
			y: 25,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 34,
			y: 25,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 33,
			y: 25,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 32,
			y: 25,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 31,
			y: 24,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 29,
			y: 24,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 28,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 27,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 26,
			y: 21,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 25,
			y: 21,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 23,
			y: 20,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 22,
			y: 20,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 21,
			y: 19,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 21,
			y: 19,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 268,
			y: 289,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 274,
			y: 289,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 312,
			y: 279,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 336,
			y: 273,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 398,
			y: 263,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 431,
			y: 260,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 471,
			y: 260,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 510,
			y: 260,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 553,
			y: 260,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 604,
			y: 260,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 650,
			y: 272,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 700,
			y: 283,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 758,
			y: 298,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 842,
			y: 323,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 885,
			y: 333,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 925,
			y: 347,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 957,
			y: 359,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 985,
			y: 372,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1015,
			y: 387,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1039,
			y: 400,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1064,
			y: 417,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1088,
			y: 433,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1109,
			y: 449,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1124,
			y: 462,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1133,
			y: 471,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1141,
			y: 483,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1144,
			y: 490,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1146,
			y: 494,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1149,
			y: 501,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1150,
			y: 504,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1150,
			y: 505,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1151,
			y: 506,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1151,
			y: 507,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1151,
			y: 510,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1151,
			y: 512,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1151,
			y: 514,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1151,
			y: 515,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1151,
			y: 519,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1151,
			y: 523,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1151,
			y: 525,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1151,
			y: 529,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1151,
			y: 534,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1151,
			y: 537,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1151,
			y: 542,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1148,
			y: 549,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1147,
			y: 555,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1146,
			y: 561,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1142,
			y: 568,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1140,
			y: 582,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1137,
			y: 587,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1135,
			y: 599,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1134,
			y: 602,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1133,
			y: 603,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1132,
			y: 604,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1131,
			y: 605,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1125,
			y: 606,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1124,
			y: 606,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1122,
			y: 606,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1118,
			y: 605,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1116,
			y: 604,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1113,
			y: 603,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1109,
			y: 598,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1099,
			y: 588,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1094,
			y: 583,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1090,
			y: 574,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1087,
			y: 568,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1085,
			y: 563,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1085,
			y: 562,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1084,
			y: 561,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1084,
			y: 560,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1084,
			y: 559,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 1084,
			y: 559,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 946,
			y: 61,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 922,
			y: 61,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 807,
			y: 61,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 711,
			y: 61,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 623,
			y: 61,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 552,
			y: 61,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 505,
			y: 59,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 473,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 444,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 427,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 416,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 410,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 407,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 405,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 403,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 402,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 397,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 393,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 389,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 386,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 383,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 381,
			y: 57,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 376,
			y: 55,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 373,
			y: 53,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 370,
			y: 50,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 368,
			y: 48,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 366,
			y: 46,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 364,
			y: 43,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 363,
			y: 43,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 360,
			y: 42,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 359,
			y: 42,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 354,
			y: 39,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 350,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 348,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 344,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 338,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 335,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 334,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 333,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 331,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 330,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 329,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 328,
			y: 38,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 326,
			y: 37,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 325,
			y: 36,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 324,
			y: 36,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 322,
			y: 36,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 320,
			y: 35,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 319,
			y: 34,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 319,
			y: 33,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 317,
			y: 32,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 315,
			y: 31,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 314,
			y: 30,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 312,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 313,
			y: 29,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 320,
			y: 28,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 326,
			y: 28,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 333,
			y: 28,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 339,
			y: 28,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 348,
			y: 25,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 353,
			y: 24,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 360,
			y: 24,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 367,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 371,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 376,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 380,
			y: 23,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 384,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 386,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 385,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 381,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 379,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 377,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 376,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 375,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 373,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 370,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 368,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 367,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 366,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 364,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 363,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 362,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 361,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 358,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 357,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 355,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 354,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 353,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 352,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 350,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 349,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 348,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 346,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 345,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 344,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 343,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 342,
			y: 22,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 344,
			y: 19,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 345,
			y: 18,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 346,
			y: 18,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 347,
			y: 17,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 347,
			y: 16,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 348,
			y: 14,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 348,
			y: 14,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 326,
			y: 619,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 311,
			y: 583,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 300,
			y: 559,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 299,
			y: 549,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 295,
			y: 541,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 294,
			y: 537,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 293,
			y: 530,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 289,
			y: 522,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 288,
			y: 517,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 285,
			y: 508,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 284,
			y: 502,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 279,
			y: 492,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 277,
			y: 488,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 273,
			y: 481,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 270,
			y: 475,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 268,
			y: 472,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 266,
			y: 468,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 263,
			y: 462,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 261,
			y: 457,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 257,
			y: 450,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 254,
			y: 442,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 250,
			y: 432,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 248,
			y: 422,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 244,
			y: 414,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 243,
			y: 403,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 239,
			y: 394,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 237,
			y: 386,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 231,
			y: 371,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 225,
			y: 358,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 218,
			y: 343,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 212,
			y: 330,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 208,
			y: 318,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 206,
			y: 311,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 205,
			y: 307,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 205,
			y: 306,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 204,
			y: 303,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 204,
			y: 302,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 204,
			y: 300,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 203,
			y: 299,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 203,
			y: 298,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 203,
			y: 297,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 205,
			y: 296,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 212,
			y: 296,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 221,
			y: 299,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 223,
			y: 300,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 228,
			y: 302,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 235,
			y: 304,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 239,
			y: 305,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 243,
			y: 307,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 246,
			y: 308,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 249,
			y: 310,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 252,
			y: 311,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 256,
			y: 312,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 263,
			y: 317,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 269,
			y: 320,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 280,
			y: 327,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 284,
			y: 329,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 287,
			y: 331,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 289,
			y: 332,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 291,
			y: 333,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 291,
			y: 333,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 475,
			y: 612,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 472,
			y: 577,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 514,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 492,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 452,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 434,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 415,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 398,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 386,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 371,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 360,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 351,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 342,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 337,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 333,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 329,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 328,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 325,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 324,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 323,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 320,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 318,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 317,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 314,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 312,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 311,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 310,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 309,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 308,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 307,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 306,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 305,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 302,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 300,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 298,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 464,
			y: 298,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 291,
			y: 334,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 290,
			y: 337,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 290,
			y: 338,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 290,
			y: 339,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 290,
			y: 341,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 290,
			y: 342,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 289,
			y: 342,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 288,
			y: 343,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 289,
			y: 346,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 290,
			y: 347,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 291,
			y: 348,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 292,
			y: 348,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 292,
			y: 349,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 293,
			y: 349,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 295,
			y: 349,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 295,
			y: 349,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 673,
			y: 441,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 681,
			y: 433,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 687,
			y: 415,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 690,
			y: 401,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 694,
			y: 386,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 696,
			y: 371,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 697,
			y: 362,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 698,
			y: 355,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 699,
			y: 348,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 700,
			y: 345,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 701,
			y: 343,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 702,
			y: 340,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 702,
			y: 339,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 702,
			y: 337,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 702,
			y: 336,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 702,
			y: 335,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 702,
			y: 334,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 700,
			y: 332,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 699,
			y: 331,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 698,
			y: 330,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 697,
			y: 329,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 697,
			y: 328,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 695,
			y: 326,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 694,
			y: 326,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 693,
			y: 323,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 692,
			y: 322,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 691,
			y: 321,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 690,
			y: 318,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 690,
			y: 317,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 689,
			y: 314,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 689,
			y: 313,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 688,
			y: 312,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 687,
			y: 311,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 686,
			y: 310,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 685,
			y: 309,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 683,
			y: 308,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 682,
			y: 307,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 681,
			y: 304,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 680,
			y: 303,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 679,
			y: 302,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 678,
			y: 302,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 678,
			y: 301,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 678,
			y: 300,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 678,
			y: 298,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 678,
			y: 296,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 678,
			y: 296,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1199,
			y: 393,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1199,
			y: 387,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1199,
			y: 382,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1199,
			y: 374,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1199,
			y: 366,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1195,
			y: 356,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1191,
			y: 346,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1186,
			y: 339,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1181,
			y: 329,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1178,
			y: 321,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1177,
			y: 317,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1175,
			y: 314,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1175,
			y: 312,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1173,
			y: 311,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1171,
			y: 308,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1169,
			y: 308,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1168,
			y: 307,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1167,
			y: 307,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1164,
			y: 307,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1163,
			y: 306,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1160,
			y: 305,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1159,
			y: 305,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1157,
			y: 303,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1155,
			y: 302,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1154,
			y: 302,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1152,
			y: 301,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1151,
			y: 300,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1150,
			y: 299,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1149,
			y: 299,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1147,
			y: 299,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1145,
			y: 299,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1143,
			y: 299,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1141,
			y: 299,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1138,
			y: 299,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1137,
			y: 298,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1134,
			y: 297,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1133,
			y: 297,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1132,
			y: 297,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1131,
			y: 297,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1128,
			y: 296,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1127,
			y: 296,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1126,
			y: 296,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1124,
			y: 296,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1122,
			y: 296,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1119,
			y: 296,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1117,
			y: 296,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1115,
			y: 296,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1114,
			y: 296,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 1114,
			y: 296,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 949,
			y: 596,
		},
	},
];
