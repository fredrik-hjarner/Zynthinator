import { History } from 'types';

// tslint:disable object-literal-sort-keys

export const example2: History =
[
	{
		type: '@@INIT',
	},
	{
		type: '@@router/LOCATION_CHANGE',
		payload: {
			pathname: '/synth',
			search: '',
			hash: '',
			key: 'fxsqhn',
		},
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateNodeModal',
		props: {
			nodeType: 'Noise',
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_NODE',
		name: '',
		nodeType: 'Noise',
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateNodeModal',
		props: {
			nodeType: 'ChangeRange',
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_NODE',
		name: '',
		lowestInput: -1,
		highestInput: 1,
		lowestOutput: 0,
		highestOutput: 2400,
		nodeType: 'ChangeRange',
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
				nodeId: 5,
				input: 'input',
			},
		],
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
		name: '',
		frequency: 220,
		detune: 0,
		oscillatorType: 'square',
		minValue: -1,
		maxValue: 1,
		nodeType: 'Oscillator',
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
				nodeId: 6,
				input: 'detune',
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
			6,
		],
		childNodes: [
			{
				nodeId: 2,
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
		type: 'MOVE_KNOB',
		id: 1,
		value: 0.17329533007064898,
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 1,
		param: 'bitsToRecord',
		value: '7',
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateNodeModal',
		props: {
			nodeType: 'TimeQuantizer',
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_NODE',
		name: '',
		milliseconds: 100,
		nodeType: 'TimeQuantizer',
	},
	{
		type: 'OPEN_MODAL',
		modal: 'InjectNodeModal',
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'INJECT_NODE',
		payload: {
			nodeId: 7,
			connectionId: 2,
		},
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateKnobModal',
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_KNOB',
		name: 'TimeQuantizer.milliseconds',
		connectedToWhichNode: 7,
		connectedToWhichParam: 'milliseconds',
		minValue: 0,
		maxValue: 1000,
		step: 0.01,
		func: 'linear',
	},
	{
		type: 'MOVE_KNOB',
		id: 2,
		value: 552.06,
	},
];
