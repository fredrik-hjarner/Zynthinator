import { importHistory } from 'redux/ReduxHistory';

let history;

export const example1 =
	() => {
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
			key: 'dy6tek',
		},
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateNodeModal',
		props: {
			nodeType: 'LowResolutionSine',
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_NODE',
		name: '',
		frequency: 440,
		levels: 4,
		minValue: -1,
		maxValue: 1,
		nodeType: 'LowResolutionSine',
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
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 1,
		param: 'bitsToRecord',
		value: '8',
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
		param: 'maxValue',
		value: '1.1',
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 1,
		param: 'millisecondsBetweenUpdates',
		value: '56',
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
		name: 'playback-rate',
		connectedToWhichNode: 4,
		connectedToWhichParam: 'playbackRate',
		minValue: 0,
		maxValue: 20,
		func: 'exponential',
		step: 0.01,
	},
];
