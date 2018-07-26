import { unknownKeysThrowsExceptions } from 'helpers';
import * as R from 'ramda';
import { Node, NodeTypeDefinitions } from 'types';

/**
 * Use this everywhere.
 */
@unknownKeysThrowsExceptions
export class Types {
	public static string = 'string';
	public static integer = 'integer';
	public static float = 'float';
}

// tslint:disable-next-line
const _nodeTypeDefinitions: NodeTypeDefinitions = {
	/**
	 *
	 */
	ADSR: {
		connectableInputs: ['play'],
		knobableInputs: ['play'],
		output: true,
		params: {
			A: {
				defaultValue: 0.05,
				type: Types.float,
			},
			D: {
				defaultValue: 0,
				type: Types.float,
			},
			R: {
				defaultValue: 0.9,
				type: Types.float,
			},
			S: {
				defaultValue: 1,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
		// triggers: ['play'],
	} as Node,
	/**
	 *
	 */
	BandPassFilter: {
		connectableInputs: ['input', 'frequency', 'detune', 'Q', 'bypass'],
		knobableInputs: ['frequency', 'detune', 'Q', 'bypass'],
		output: true,
		params: {
			frequency: {
				defaultValue: 350,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	} as Node,
	/**
	 *
	 */
	ChangeRange: {
		connectableInputs: ['input', 'lowestOutput', 'highestOutput'],
		knobableInputs: ['input', 'lowestOutput', 'highestOutput'],
		output: true,
		params: {
			highestInput: {
				defaultValue: 1,
				type: Types.float,
			},
			highestOutput: {
				defaultValue: 1,
				type: Types.float,
			},
			lowestInput: {
				defaultValue: -1,
				type: Types.float,
			},
			lowestOutput: {
				defaultValue: -1,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	} as Node,
	/**
	 *
	 */
	CrossoverDistortion: {
		connectableInputs: ['input', 'threshold', 'bypass'],
		knobableInputs: ['input', 'threshold', 'bypass'],
		output: true,
		params: {
			name: {
				defaultValue: '',
				type: Types.string,
			},
			threshold: {
				defaultValue: 0,
				type: Types.float, // todo. types should be enums ffs!
			},
		},
	} as Node,
	/**
	 *
	 */
	CustomAnalyser: {
		connectableInputs: ['input', 'exponent', 'trigger'],
		knobableInputs: ['input', 'exponent', 'trigger'],
		output: false,
		params: {
			exponent: {
				defaultValue: 8,
				type: Types.integer,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
			trigger: {
				defaultValue: 0,
				type: Types.float,
			},
		},
	} as Node,
	/**
	 *
	 */
	DcSignal: {
		connectableInputs: [],
		knobableInputs: ['dcValue'],
		output: true,
		params: {
			dcValue: {
				defaultValue: 1,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	} as Node,
	/**
	 *
	 */
	Delay: {
		connectableInputs: ['input', 'delayTime'],
		knobableInputs: ['delayTime'],
		output: true,
		params: {
			delayTime: {
				defaultValue: 1,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	} as Node,
	/**
	 *
	 */
	DigitalSequence: {
		connectableInputs: ['minValue', 'maxValue', 'millisecondsPerBit', 'playbackRate'],
		knobableInputs: ['minValue', 'maxValue', 'millisecondsPerBit', 'playbackRate'],
		output: true,
		params: {
			maxValue: {
				defaultValue: 1,
				type: Types.float,
			},
			millisecondsPerBit: {
				defaultValue: 500,
				type: Types.float,
			},
			minValue: {
				defaultValue: 0,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
			sequenceOfBits: {
				defaultValue: '',
				type: Types.string,
			},
		},
	} as Node,
	/**
	 *
	 */
	Echo: {
		connectableInputs: ['input', 'milliseconds', 'bypass'],
		knobableInputs: ['input', 'milliseconds', 'bypass'],
		output: true,
		params: {
			milliseconds: {
				defaultValue: 100,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	} as Node,
	/**
	 * Echo is based on AudioWorklet
	 *
	 * Echo2 is based on Delay & Gain
	 */
	Echo2: {
		connectableInputs: ['input', 'seconds', 'bypass', 'echoGain'],
		knobableInputs: ['input', 'seconds', 'bypass', 'echoGain'],
		output: true,
		params: {
			echoGain: {
				defaultValue: 0.1,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
			seconds: {
				defaultValue: 0.1,
				type: Types.float,
			},
		},
	} as Node,
	/**
	 *
	 */
	FrequencyDomainAnalyser: {
		connectableInputs: ['input'],
		knobableInputs: [],
		output: true,
		params: {
			name: { type: Types.string, defaultValue: '' },
		},
	} as Node,
	/**
	 *
	 */
	Gain: {
		connectableInputs: ['input', 'gain'],
		knobableInputs: ['gain'],
		output: true,
		params: {
			gain: {
				defaultValue: 1,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	} as Node,
	/**
	 *
	 */
	HighPassFilter: {
		connectableInputs: ['input', 'frequency', 'detune', 'Q', 'bypass'],
		knobableInputs: ['frequency', 'detune', 'Q', 'bypass'],
		output: true,
		params: {
			frequency: {
				defaultValue: 350,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	} as Node,
	/**
	 *
	 */
	Knob: {
		connectableInputs: [],
		knobableInputs: [],
		output: false,
		params: {},
	} as Node,
	/**
	 *
	 */
	LowPassFilter: {
		connectableInputs: ['input', 'frequency', 'detune', 'Q', 'bypass'],
		knobableInputs: ['frequency', 'detune', 'Q', 'bypass'],
		output: true,
		params: {
			frequency: {
				defaultValue: 350,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	} as Node,
	/**
	 *
	 */
	LowResolutionSine: {
		connectableInputs: [
			// 'minValue',
			// 'maxValue',
			'gain',
			'playbackRate',
		],
		knobableInputs: [
			// 'minValue',
			// 'maxValue',
			'gain',
			'playbackRate',
		],
		output: true,
		params: {
			frequency: {
				defaultValue: 440,
				type: Types.float,
			},
			levels: {
				defaultValue: 4,
				type: Types.integer,
			},
				maxValue: {
					defaultValue: 1,
					type: Types.float,
				},
			minValue: {
				defaultValue: -1,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	} as Node,
	/**
	 *
	 */
	MajorTriad: {
		connectableInputs: [
			'frequency',
		],
		knobableInputs: [
			'frequency',
		],
		output: true,
		params: {
			frequency: {
				defaultValue: 440,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	} as Node,
	/**
	 *
	 */
	Noise: {
		connectableInputs: ['gain'],
		knobableInputs: ['gain'],
		output: true,
		params: {
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	} as Node,
	/**
	 *
	 */
	Oscillator: {
		connectableInputs: ['frequency', 'detune', 'gain', 'minValue', 'maxValue'],
		knobableInputs: ['frequency', 'detune', 'gain', 'minValue', 'maxValue'],
		output: true,
		params: {
			detune: {
				defaultValue: 0,
				type: Types.float,
			},
			frequency: {
				defaultValue: 440,
				type: Types.float,
			},
			maxValue: {
				defaultValue: 1,
				type: Types.float,
			},
			minValue: {
				defaultValue: -1,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
			oscillatorType: {
				defaultValue: 'sine',
				type: [
					'sawtooth',
					'sine',
					'square',
					'triangle',
				],
			},
			// gain: {
			//   type: Types.float,
			//   defaultValue: 1,
			// },
		},
	} as Node,
	/**
	 *
	 */
	PWM: {
		connectableInputs: ['minValue', 'maxValue', 'gain', 'dutyCycle', 'frequency'],
		knobableInputs: ['minValue', 'maxValue', 'gain', 'dutyCycle', 'frequency'],
		output: true,
		params: {
			dutyCycle: {
				defaultValue: 0.5,
				type: Types.float,
			},
			frequency: {
				defaultValue: 440,
				type: Types.float,
			},
			maxValue: {
				defaultValue: 1,
				type: Types.float,
			},
			minValue: {
				defaultValue: 0,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	} as Node,
	/**
	 *
	 */
	PerfectFifth: {
		connectableInputs: [
			'frequency',
		],
		knobableInputs: [
			'frequency',
		],
		output: true,
		params: {
			frequency: {
				defaultValue: 440,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	} as Node,
	/**
	 *
	 */
	Quantizer: {
		connectableInputs: ['input', 'quantumSize', 'bypass'],
		knobableInputs: ['input', 'quantumSize', 'bypass'],
		output: true,
		params: {
			name: {
				defaultValue: '',
				type: Types.string,
			},
			quantumSize: {
				defaultValue: 0.1,
				type: Types.float,
			},
		},
	} as Node,
	/**
	 *
	 */
	SchmittTrigger: {
		connectableInputs: ['input', 'threshold'],
		knobableInputs: ['input', 'threshold'],
		output: true,
		params: {
			name: {
				defaultValue: '',
				type: Types.string,
			},
			threshold: {
				defaultValue: 0,
				type: Types.float, // todo. types should be enums ffs!
			},
		},
	} as Node,
	/**
	 *
	 */
	Speakers: {
		connectableInputs: ['input'],
		knobableInputs: ['gain'],
		output: false,
		params: {},
	},
	/**
	 *
	 */
	TimeDomainAnalyser: {
		connectableInputs: ['input'],
		knobableInputs: [],
		output: true,
		params: {
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	},
	/**
	 *
	 */
	TimeQuantizer: {
		connectableInputs: ['input', 'milliseconds', 'bypass'],
		knobableInputs: ['input', 'milliseconds', 'bypass'],
		output: true,
		params: {
			milliseconds: {
				defaultValue: 100,
				type: Types.float,
			},
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	},
	/**
	 *
	 */
	TwowaySwitch: {
		connectableInputs: ['A', 'B', 'switchSignal', 'gain'],
		knobableInputs: ['switchSignal', 'gain'],
		output: true,
		params: {
			name: {
				defaultValue: '',
				type: Types.string,
			},
		},
	},
};

// Add UI colors.
export const nodeTypeDefinitions: NodeTypeDefinitions = R.addIndex(R.map)(
	(def, index) => {
		const hue = index * 60;
		const saturation = 70; // 25 + (Math.floor(hue / 360) * 25);
		const lightness = 25 + (Math.floor(hue / 360) * 25); // hue < 360 ? 75 : 50;
		return R.merge(
			def,
			{ ui: { color: `hsl(${hue}, ${saturation}%, ${lightness}%)` } },
		);
	},
	_nodeTypeDefinitions,
);

/**
 * defaultValues('Oscillator')
 * returns the default values for this.state
 * for a Oscillator form component.
 */
export const defaultValues = type =>
	Object.entries(nodeTypeDefinitions[type].params)
		.reduce((accum, [param, { defaultValue }]) => {
			accum[param] = defaultValue; // eslint-disable-line
			return accum;
		}, {});

export const parseValue = (nodeType, paramName, value) => {
	const { type } =
		nodeTypeDefinitions[nodeType].params[paramName];
	if (type === 'string') {
		return value;
	} else if (type === 'float') {
		return parseFloat(value);
	} else if (type === 'integer') {
		return Math.round(parseFloat(value));
	} else if (Array.isArray(type)) {
		return value;
	}
	const message = `Error in nodeTypeDefinitions.js: ${type} is not a valid 'type'`;
	alert(message);
	console.log(message); // tslint:disable-line
	debugger; // tslint:disable-line
	throw message;
	// return null;
};
