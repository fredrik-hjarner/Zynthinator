import * as R from 'ramda';
import { unknownKeysThrowsExceptions } from 'helpers';

/**
 * Use this everywhere.
 */
@unknownKeysThrowsExceptions
export class Types {
  static string = 'string'
  static integer = 'integer'
  static float = 'float'
}

const _nodeTypeDefinitions = {
  /**
   *
   */
  ADSR: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      A: {
        type: Types.float,
        defaultValue: 0.05,
      },
      D: {
        type: Types.float,
        defaultValue: 0,
      }, 
      S: {
        type: Types.float,
        defaultValue: 1,
      },
      R: {
        type: Types.float,
        defaultValue: 0.9,
      },
    },
    connectableInputs: ['play'],
    knobableInputs: ['play'],
    // triggers: ['play'],
    output: true,
  },
  /**
   *
   */
  ChangeRange: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      lowestInput: {
        type: Types.float,
        defaultValue: -1,
      },
      highestInput: {
        type: Types.float,
        defaultValue: 1,
      }, 
      lowestOutput: {
        type: Types.float,
        defaultValue: -1,
      },
      highestOutput: {
        type: Types.float,
        defaultValue: 1,
      },
    },
    connectableInputs: ['input', 'lowestOutput', 'highestOutput'],
    knobableInputs: ['input', 'lowestOutput', 'highestOutput'],
    output: true,
  },
  /**
   * 
   */
  Oscillator: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      frequency: {
        type: Types.float,
        defaultValue: 440,
      },
      detune: {
        type: Types.float,
        defaultValue: 0,
      },
      oscillatorType: {
        type: [
          'sawtooth',
          'sine',
          'square',
          'triangle',
        ],
        defaultValue: 'sine',
      },
      minValue: {
        type: Types.float,
        defaultValue: -1,
      },
      maxValue: {
        type: Types.float,
        defaultValue: 1,
      },
      // gain: {
      //   type: Types.float,
      //   defaultValue: 1,
      // },
    },
    connectableInputs: ['frequency', 'detune', 'gain', 'minValue', 'maxValue'],
    knobableInputs: ['frequency', 'detune', 'gain', 'minValue', 'maxValue'],
    output: true,
  },
  /**
   *
   */
  Gain: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      gain: {
        type: Types.float,
        defaultValue: 1,
      },
    },
    connectableInputs: ['input', 'gain'],
    knobableInputs: ['gain'],
    output: true,
  },
  /**
   *
   */
  Noise: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
    },
    connectableInputs: ['gain'],
    knobableInputs: ['gain'],
    output: true,
  },
  /**
   *
   */
  TimeDomainAnalyser: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
    },
    connectableInputs: ['input'],
    knobableInputs: [],
    output: true,
  },
  /**
   *
   */
  FrequencyDomainAnalyser: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
    },
    connectableInputs: ['input'],
    knobableInputs: [],
    output: true,
  },
  /**
   *
   */
  LowPassFilter: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      frequency: {
        type: Types.float,
        defaultValue: 350,
      },
    },
    connectableInputs: ['input', 'frequency', 'detune', 'Q'],
    knobableInputs: ['frequency', 'detune', 'Q'],
    output: true,
  },
  /**
   *
   */
  HighPassFilter: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      frequency: {
        type: Types.float,
        defaultValue: 350,
      },
    },
    connectableInputs: ['input', 'frequency', 'detune', 'Q'],
    knobableInputs: ['frequency', 'detune', 'Q'],
    output: true,
  },
  /**
   *
   */
  BandPassFilter: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      frequency: {
        type: Types.float,
        defaultValue: 350,
      },
    },
    connectableInputs: ['input', 'frequency', 'detune', 'Q'],
    knobableInputs: ['frequency', 'detune', 'Q'],
    output: true,
  },
  /**
   *
   */
  DcSignal: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      dcValue: {
        type: Types.float,
        defaultValue: 1,
      },
    },
    connectableInputs: [],
    knobableInputs: ['dcValue'],
    output: true,
  },
  /**
   *
   */
  Delay: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      delayTime: {
        type: Types.float,
        defaultValue: 1,
      },
    },
    connectableInputs: ['input', 'delayTime'],
    knobableInputs: ['delayTime'],
    output: true,
  },
  /**
   *
   */
  LowResolutionSine: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      frequency: {
        type: Types.float,
        defaultValue: 440,
      },
      levels: {
        type: Types.integer,
        defaultValue: 4,
      },
      minValue: {
        type: Types.float,
        defaultValue: -1,
      },
      maxValue: {
        type: Types.float,
        defaultValue: 1,
      },
    },
    connectableInputs: [
      // 'minValue',
      // 'maxValue',
      'gain',
      'playbackRate'
    ],
    knobableInputs: [
      // 'minValue',
      // 'maxValue',
      'gain',
      'playbackRate'
    ],
    output: true,
  },
  /**
   * 
   */
  Speakers: {
    params: {},
    connectableInputs: ['input'],
    knobableInputs: ['gain'],
    output: false,
  },
  /**
   *
   */
  PWM: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      frequency: {
        type: Types.float,
        defaultValue: 440,
      },
      dutyCycle: {
        type: Types.float,
        defaultValue: 0.5,
      },
      minValue: {
        type: Types.float,
        defaultValue: 0,
      },
      maxValue: {
        type: Types.float,
        defaultValue: 1,
      }
    },
    connectableInputs: ['minValue', 'maxValue', 'gain', 'dutyCycle', 'frequency'],
    knobableInputs: ['minValue', 'maxValue', 'gain', 'dutyCycle', 'frequency'],
    output: true,
  },
  /**
   *
   */
  DigitalSequence: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      sequenceOfBits: {
        type: Types.string,
        defaultValue: '',
      },
      millisecondsPerBit: {
        type: Types.float,
        defaultValue: 500,
      },
      minValue: {
        type: Types.float,
        defaultValue: 0,
      },
      maxValue: {
        type: Types.float,
        defaultValue: 1,
      }
    },
    connectableInputs: ['minValue', 'maxValue', 'millisecondsPerBit', 'playbackRate'],
    knobableInputs: ['minValue', 'maxValue', 'millisecondsPerBit', 'playbackRate'],
    output: true,
  },
  /**
   *
   */
  // HarmonicChord: {
  //   params: {
  //     name: {
  //       type: Types.string,
  //       defaultValue: '',
  //     },
  //     frequency: {
  //       type: Types.float,
  //       defaultValue: 440,
  //     },
  //   },
  //   connectableInputs: [
  //     'frequency'
  //   ],
  //   knobableInputs: [
  //     'frequency'
  //   ],
  //   output: true
  // },
  /**
   * 
   */
  PerfectFifth: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      frequency: {
        type: Types.float,
        defaultValue: 440,
      },
    },
    connectableInputs: [
      'frequency'
    ],
    knobableInputs: [
      'frequency'
    ],
    output: true
  },
  /**
   * 
   */
  MajorTriad: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      frequency: {
        type: Types.float,
        defaultValue: 440,
      },
    },
    connectableInputs: [
      'frequency'
    ],
    knobableInputs: [
      'frequency'
    ],
    output: true
  },
  /**
   * 
   */
  TwowaySwitch: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
    },
    connectableInputs: ['A', 'B', 'switchSignal', 'gain'],
    knobableInputs: ['switchSignal', 'gain'],
    output: true
  },
  /**
   * 
   */
  SchmittTrigger: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      threshold: {
        type: Types.float, // todo. types should be enums ffs!
        defaultValue: 0,
      },
    },
    connectableInputs: ['input', 'threshold'],
    knobableInputs: ['input', 'threshold'],
    output: true
  },
  /**
   * 
   */
  CrossoverDistortion: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      threshold: {
        type: Types.float, // todo. types should be enums ffs!
        defaultValue: 0,
      },
    },
    connectableInputs: ['input', 'threshold'],
    knobableInputs: ['input', 'threshold'],
    output: true
  },
  /**
   * 
   */
  CustomAnalyser: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      exponent: {
        type: Types.integer,
        defaultValue: 8,
      }
    },
    connectableInputs: ['input', 'exponent'],
    knobableInputs: ['input', 'exponent'],
    output: false
  },
  /**
   * 
   */
  Quantizer: {
    params: {
      name: {
        type: Types.string,
        defaultValue: '',
      },
      quantumSize: {
        type: Types.float,
        defaultValue: 0.1,
      }
    },
    connectableInputs: ['input', 'quantumSize'],
    knobableInputs: ['input', 'quantumSize'],
    output: true
  },
  /**
   * 
   */
  Knob: {
    params: {},
    connectableInputs: [],
    knobableInputs: [],
    output: false
  },
};

// Add UI colors.
export const nodeTypeDefinitions = R.addIndex(R.map)(
  (def, index) => {
    const hue = index * 60;
    const saturation = 70; // 25 + (Math.floor(hue / 360) * 25);
    const lightness = 25 + (Math.floor(hue / 360) * 25); // hue < 360 ? 75 : 50;
    return R.merge(
      def,
      { ui: { color: `hsl(${hue}, ${saturation}%, ${lightness}%)` } }
    );
  },
  _nodeTypeDefinitions
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
  console.log(message);
  debugger;
  throw message;
  // return null;
};
