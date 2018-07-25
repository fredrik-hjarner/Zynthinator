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
			key: '6ngxbc',
		},
	},
	{
		type: 'OPEN_MODAL',
		modal: 'CreateNodeModal',
		props: {
			nodeType: 'DigitalSequence',
		},
	},
	{
		type: 'CLOSE_MODAL',
	},
	{
		type: 'CREATE_NODE',
		name: '',
		sequenceOfBits: '000000000100000000110000000111',
		millisecondsPerBit: 50,
		minValue: 0,
		maxValue: 1,
		nodeType: 'DigitalSequence',
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
		value: '15',
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
		value: '-0.1',
	},
	{
		type: 'UI_TD_ANALYSER_CHANGE_PARAMS',
		id: 1,
		param: 'millisecondsBetweenUpdates',
		value: '100',
	},
];
