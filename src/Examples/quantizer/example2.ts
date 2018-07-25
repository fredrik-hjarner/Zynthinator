import { importHistory } from 'redux/ReduxHistory';

let history;

export const example2 = () => {
	importHistory(history, 0);
};

history =
[
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
			nodeType: 'Quantizer',
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_NODE',
		name: '',
		quantumSize: 0.1,
		nodeType: 'Quantizer',
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
			connectionId: 3,
		},
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 1,
		param: 'bitsToRecord',
		value: '7',
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
		name: 'quantaSize',
		connectedToWhichNode: 5,
		connectedToWhichParam: 'quantumSize',
		minValue: 0,
		maxValue: 1,
		step: 0.01,
		func: 'linear',
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateNodeModal',
		props: {
			nodeType: 'FrequencyDomainAnalyser',
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_NODE',
		name: '',
		nodeType: 'FrequencyDomainAnalyser',
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
				nodeId: 7,
				input: 'input',
			},
		],
	},
	{
		type: 'UI_FD_ANALYSER_CHANGE_PARAMS',
		id: 2,
		param: 'fftSize',
		value: '10',
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 1,
		param: 'maxValue',
		value: '1.1',
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 1,
		param: 'minValue',
		value: '-1.1',
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 1,
		param: 'millisecondsBetweenUpdates',
		value: '60',
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
		name: 'sine-that-modulates-quanta-size',
		frequency: 0.1,
		detune: 0,
		oscillatorType: 'sine',
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
			8,
		],
		childNodes: [
			{
				nodeId: 5,
				input: 'quantumSize',
			},
		],
	},
];
