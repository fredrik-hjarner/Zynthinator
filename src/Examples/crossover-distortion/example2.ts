import { importHistory } from 'redux/ReduxHistory';

let history;

export const example2 = () => {
	importHistory(history, 0);
};

history =
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
		},
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
		frequency: 440,
		detune: 0,
		oscillatorType: 'sine',
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
		modal: 'CreateNodeModal',
		props: {
			nodeType: 'CrossoverDistortion',
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_NODE',
		name: '',
		threshold: 0,
		nodeType: 'CrossoverDistortion',
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateConnectionModal',
	},
	{
		type: 'CLOSE_MODAL',
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
			nodeId: 5,
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
		name: 'threshold',
		connectedToWhichNode: 5,
		connectedToWhichParam: 'threshold',
		minValue: 0,
		maxValue: 1,
		step: 0.01,
		func: 'linear',
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
		frequency: 2,
		detune: 0,
		oscillatorType: 'square',
		minValue: 0,
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
			7,
		],
		childNodes: [
			{
				nodeId: 5,
				input: 'bypass',
			},
		],
	},
	{
		type: 'MOVE_KNOB',
		id: 2,
		value: 0.42,
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
		},
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
		},
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateNodeModal',
		props: {
			nodeType: 'Oscillator',
			node: {
				id: 7,
				name: '',
				frequency: 2,
				detune: 0,
				oscillatorType: 'square',
				minValue: 0,
				maxValue: 1,
				nodeType: 'Oscillator',
			},
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_NODE',
		id: 7,
		name: '',
		frequency: 0.5,
		detune: 0,
		oscillatorType: 'square',
		minValue: 0,
		maxValue: 1,
		nodeType: 'Oscillator',
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
		},
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateNodeModal',
		props: {
			nodeType: 'Oscillator',
			node: {
				id: 4,
				name: '',
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
		type: 'OPEN_MODAL',
		modal: 'CreateNodeModal',
		props: {
			nodeType: 'Oscillator',
			node: {
				id: 7,
				name: '',
				frequency: 0.5,
				detune: 0,
				oscillatorType: 'square',
				minValue: 0,
				maxValue: 1,
				nodeType: 'Oscillator',
			},
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_NODE',
		id: 7,
		name: '',
		frequency: 0.33,
		detune: 0,
		oscillatorType: 'square',
		minValue: 0,
		maxValue: 1,
		nodeType: 'Oscillator',
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
		},
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
		},
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
		},
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
		},
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
		},
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
			7,
		],
		childNodes: [
			{
				nodeId: 8,
				input: 'input',
			},
		],
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 2,
		param: 'maxValue',
		value: '1.1',
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 2,
		param: 'minValue',
		value: '-0.1',
	},
];
