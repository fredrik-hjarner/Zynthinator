import * as R from 'ramda';

const _nodeTypeDefinitions = {
  /**
   *
   */
  ADSR: {
    params: {
      name: {
        type: 'string',
        defaultValue: '',
      },
      A: {
        type: 'float',
        defaultValue: 0.05,
      },
      D: {
        type: 'float',
        defaultValue: 0,
      }, 
      S: {
        type: 'float',
        defaultValue: 1,
      },
      R: {
        type: 'float',
        defaultValue: 0.9,
      },
    },
    connectableInputs: [],
    knobableInputs: [],
    triggers: ['play'],
    output: true,
  },
  /**
   *
   */
  ChangeRange: {
    params: {
      name: {
        type: 'string',
        defaultValue: '',
      },
      lowestInput: {
        type: 'float',
        defaultValue: -1,
      },
      highestInput: {
        type: 'float',
        defaultValue: 1,
      }, 
      lowestOutput: {
        type: 'float',
        defaultValue: -1,
      },
      highestOutput: {
        type: 'float',
        defaultValue: 1,
      },
    },
    connectableInputs: ['input'],
    knobableInputs: ['input'],
    output: true,
  },
  /**
   * 
   */
  Oscillator: {
    params: {
      name: {
        type: 'string',
        defaultValue: '',
      },
      frequency: {
        type: 'float',
        defaultValue: 440,
      },
      detune: {
        type: 'float',
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
        type: 'float',
        defaultValue: -1,
      },
      maxValue: {
        type: 'float',
        defaultValue: 1,
      },
      gain: {
        type: 'float',
        defaultValue: 1,
      },
    },
    connectableInputs: ['frequency', 'detune', 'gain'],
    knobableInputs: ['frequency', 'detune', 'gain', 'minValue', 'maxValue'],
    output: true,
  },
  /**
   *
   */
  Gain: {
    params: {
      name: {
        type: 'string',
        defaultValue: '',
      },
      gain: {
        type: 'float',
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
        type: 'string',
        defaultValue: '',
      },
    },
    connectableInputs: [],
    knobableInputs: [],
    output: true,
  },
  /**
   *
   */
  TimeDomainAnalyser: {
    params: {
      name: {
        type: 'string',
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
        type: 'string',
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
        type: 'string',
        defaultValue: '',
      },
      frequency: {
        type: 'float',
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
        type: 'string',
        defaultValue: '',
      },
      frequency: {
        type: 'float',
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
        type: 'string',
        defaultValue: '',
      },
      frequency: {
        type: 'float',
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
        type: 'string',
        defaultValue: '',
      },
      dcValue: {
        type: 'float',
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
        type: 'string',
        defaultValue: '',
      },
      delayTime: {
        type: 'float',
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
        type: 'string',
        defaultValue: '',
      },
      frequency: {
        type: 'float',
        defaultValue: 440,
      },
      levels: {
        type: 'integer',
        defaultValue: 4,
      },
      minValue: {
        type: 'float',
        defaultValue: -1,
      },
      maxValue: {
        type: 'float',
        defaultValue: 1,
      },
      gain: {
        type: 'float',
        defaultValue: 1,
      },
    },
    connectableInputs: [],
    knobableInputs: ['levels', 'frequency'],
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
};

// Add UI colors.
export const nodeTypeDefinitions =
  R.addIndex(R.map)(
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
export const defaultValues =
  type =>
    Object.entries(nodeTypeDefinitions[type].params)
      .reduce((accum, [param, { defaultValue }]) => {
        accum[param] = defaultValue; // eslint-disable-line
        return accum;
      }, {});

export const parseValue =
  (nodeType, paramName, value) => {
    const { type } =
      nodeTypeDefinitions[nodeType].params[paramName];
    if (type === 'string') {
      return value;
    } else if (type === 'float') {
      return parseFloat(value);
    } else if (type === 'integer') {
      return parseInt(value);
    } else if (Array.isArray(type)) {
      return value;
    }
    alert('Error');
    debugger;
    return null;
  };
