import { History } from 'types';

// tslint:disable object-literal-sort-keys

export const example1: History =
[
	{
		type: 'CREATE_NODE',
		name: '',
		nodeType: 'TwowaySwitch',
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			4,
		],
		childNodes: [
			{
				nodeId: 1,
				input: 'input',
			},
			{
				nodeId: 2,
				input: 'input',
			},
		],
	},
	{
		type: 'CREATE_NODE',
		name: '',
		frequency: 440,
		detune: 0,
		oscillatorType: 'sine',
		minValue: -1,
		maxValue: 1,
		nodeType: 'Oscillator',
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
				input: 'A',
			},
		],
	},
	{
		type: 'CREATE_NODE',
		name: '',
		frequency: 1,
		detune: 0,
		oscillatorType: 'square',
		minValue: 0,
		maxValue: 1,
		nodeType: 'Oscillator',
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			6,
		],
		childNodes: [
			{
				nodeId: 4,
				input: 'switchSignal',
			},
		],
	},
	{
		type: 'MOVE_KNOB',
		id: 1,
		value: 0.49658524712551455,
	},
	{
		type: 'CREATE_NODE',
		name: '',
		frequency: 440,
		detune: 0,
		oscillatorType: 'triangle',
		minValue: -1,
		maxValue: 1,
		nodeType: 'Oscillator',
	},
	{
		type: 'CREATE_CONNECTION',
		name: '',
		parentNodeIds: [
			7,
		],
		childNodes: [
			{
				nodeId: 4,
				input: 'B',
			},
		],
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 1,
		param: 'bitsToRecord',
		value: '8',
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 842,
			y: 263,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 655,
			y: 390,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 197,
			y: 559,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 432,
			y: 158,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 119,
			y: 164,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 64,
			y: 284,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 12,
			y: 12,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 434,
			y: 127,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 4,
			y: 190,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 17,
			y: 371,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 7,
			x: 16,
			y: 191,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 16,
			y: 11,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 288,
			y: 12,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 642,
			y: 11,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 582,
			y: 152,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 513,
			y: 323,
		},
	},
];
