export type Action = {
	[key in string]: any
};
export type History = Action[];
export type ConnectionsState = {

};

// TODO: stricted Action type. doesn't work now because my format is inconsistent.
// export type Action = {
// 	type: string,
// 	payload: any,
// };

export type Parameter = {
	type: string | any[],
	defaultValue: any,
};

export type Node = {
	params: {
		[paramname in string]: Parameter
	},
	connectableInputs: string[],
	knobableInputs: string[],
	output: boolean,
};

export type NodeTypeDefinitions = {
	[nodeType in string]: Node
};
