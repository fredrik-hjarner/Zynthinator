import { History } from 'types';

// tslint:disable object-literal-sort-keys

export const example1: History =
[
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
		value: '8',
	},
	{
		type: 'MOVE_KNOB',
		id: 1,
		value: 0.14571314513188285,
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
		type: 'CREATE_NODE',
		name: '',
		threshold: 0,
		nodeType: 'CrossoverDistortion',
	},
	{
		type: 'INJECT_NODE',
		payload: {
			nodeId: 5,
			connectionId: 2,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 871,
			y: 132,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 730,
			y: 283,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 900,
			y: 213,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 367,
			y: 99,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 175,
			y: 93,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 946,
			y: 135,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 793,
			y: 261,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 2,
			x: 450,
			y: 103,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 5,
			x: 285,
			y: 102,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 4,
			x: 48,
			y: 100,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 3,
			x: 871,
			y: 294,
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 1,
			x: 923,
			y: 123,
		},
	},
	{
		type: 'CREATE_KNOB',
		payload: {
			maxValue: 1,
			minValue: 0,
			name: '',
			step: 0.01,
			func: 'linear',
		},
	},
	{
		type: 'MOVE_GRAPH_NODE',
		payload: {
			nodeId: 6,
			x: 117,
			y: 361,
		},
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
				input: 'threshold',
			},
		],
	},
	{
		type: 'MOVE_KNOB',
		id: 2,
		value: 0.4,
	},
];
