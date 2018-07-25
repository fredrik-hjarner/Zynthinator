import React from 'react';
import {
  TopMenuItem,
  MenuItem
} from 'components/semantic++';
import * as E from 'Examples';
import { importHistory } from 'redux/ReduxHistory';

/**
 * TODO: extract out MenuItem to something more specific that wraps the example json in a
 * importHistory statement.
 */

const DigitalLogic = () => (
  <MenuItem caption="Digital logic">
    <MenuItem caption="SchmittTrigger">
      <MenuItem
        caption="1. Knob input & thresholhold"
        onClick={() => importHistory(E.schmittTrigger.example1, 0)}
      />
      <MenuItem caption="2. Knob sine gain" onClick={() => importHistory(E.schmittTrigger.example2, 0)} />
    </MenuItem>
    <MenuItem caption="TwoWaySwitch">
      <MenuItem
        caption="1. Switching between triangle and sine"
        onClick={() => importHistory(E.twoWaySwitch.example1, 0)}
      />
    </MenuItem>
  </MenuItem>
);

const Distortions = () => (
  <MenuItem caption="Distortions">
    <MenuItem caption="CrossoverDistortion">
      <MenuItem caption="1. Basic example" onClick={() => importHistory(E.crossoverDistortion.example1, 0)} />
      <MenuItem
        caption="1. Square enables/disables distortion"
        onClick={() => importHistory(E.crossoverDistortion.example2, 0)}
      />
    </MenuItem>
  </MenuItem>
);

const Oscillators = () => (
  <MenuItem caption="Oscillators">
    <MenuItem caption="DigitalSequence">
      <MenuItem
        caption="1. Basic example"
        onClick={() => importHistory(E.digitalSequence.example1, 0)}
      />
      <MenuItem
        caption="2. Noise drums"
        onClick={() => importHistory(E.digitalSequence.example2, 0)}
      />
    </MenuItem>
    <MenuItem caption="LowResolutionSine">
      <MenuItem
        caption="1. Basic example"
        onClick={() => importHistory(E.lowResolutionSine.example1, 0)}
      />
      <MenuItem
        caption="2. Frequency modulate an oscillator"
        onClick={() => importHistory(E.lowResolutionSine.example2, 0)}
      />
    </MenuItem>
    <MenuItem caption="Sine">
      <MenuItem
        caption="1. 440Hz sine"
        onClick={() => importHistory(E.sine.example1, 0)}
      />
    </MenuItem>
  </MenuItem>
);

const Quantizers = () => (
  <MenuItem caption="Quantizers">
    <MenuItem caption="Quantizer">
      <MenuItem
        caption="1. Change resolution of sine with knob"
        onClick={() => importHistory(E.quantizer.example1, 0)}
      />
      <MenuItem
        caption="2. Triangle changing resolution of sine"
        onClick={() => importHistory(E.quantizer.example2, 0)}
      />
    </MenuItem>
    <MenuItem caption="TimeQuantizer">
      <MenuItem caption="1. Quantized noise" onClick={() => importHistory(E.timeQuantizer.example1, 0)} />
      <MenuItem
        caption="2. Playing random tones"
        onClick={() => importHistory(E.timeQuantizer.example2, 0)}
      />
      <MenuItem
        caption="3. Like 2. but sine modulates speed of melody"
        onClick={() => importHistory(E.timeQuantizer.example3, 0)}
      />
    </MenuItem>
  </MenuItem>
);

export const Examples = () => (
  <TopMenuItem caption="Examples">
    <MenuItem caption="ADSR">
      <MenuItem caption="1. PWM triggers ADSR" onClick={() => importHistory(E.adsr.example1, 0)} />
      <MenuItem caption="2. Knob triggers ADSR" onClick={() => importHistory(E.adsr.example2, 0)} />
    </MenuItem>
    <MenuItem caption="ChangeRange">
      <MenuItem caption="1. Knob max val of sine" onClick={() => importHistory(E.changeRange.example1, 0)} />
    </MenuItem>
    <MenuItem caption="Delay">
      <MenuItem
        caption="1. A sine and delayed sine summed"
        onClick={() => importHistory(E.delay.example1, 0)}
      />
      <MenuItem
        caption="2. As nr. 1 but delay is sine-modulated"
        onClick={() => importHistory(E.delay.example2, 0)}
      />
    </MenuItem>
    <DigitalLogic/>
    <Distortions/>
    <MenuItem caption="Filters">
      <MenuItem caption="1. Low-pass filter" onClick={() => importHistory(E.filters.example1, 0)} />
      <MenuItem caption="2. High-pass filter" onClick={() => importHistory(E.filters.example2, 0)} />
      <MenuItem caption="3. Band-pass filter" onClick={() => importHistory(E.filters.example3, 0)} />
    </MenuItem>
    <Oscillators/>
    <Quantizers/>
  </TopMenuItem>
);
