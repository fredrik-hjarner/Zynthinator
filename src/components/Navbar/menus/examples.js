import React from 'react';
import {
  TopMenuItem,
  MenuItem
} from 'components/semantic++';
import * as E from 'Examples';

const DigitalLogic = () => (
  <MenuItem caption="Digital logic">
    <MenuItem caption="SchmittTrigger">
      <MenuItem caption="1. Knob input & thresholhold" onClick={E.schmittTrigger.example1} />
      <MenuItem caption="2. Knob sine gain" onClick={E.schmittTrigger.example2} />
    </MenuItem>
  </MenuItem>
);

const Distortions = () => (
  <MenuItem caption="Distortions">
    <MenuItem caption="CrossoverDistortion">
      <MenuItem caption="1. Basic example" disabled="disabled" onClick={E.schmittTrigger.example1} />
    </MenuItem>
  </MenuItem>
);

const Oscillators = () => (
  <MenuItem caption="Oscillators">
    <MenuItem caption="DigitalSequence">
      <MenuItem
        caption="1. Basic example"
        onClick={E.digitalSequence.example1}
      />
      <MenuItem
        caption="2. Noise drums"
        onClick={E.digitalSequence.example2}
      />
    </MenuItem>
    <MenuItem caption="LowResolutionSine">
      <MenuItem
        caption="1. Basic example"
        onClick={E.lowResolutionSine.example1}
      />
      <MenuItem
        caption="2. Frequency modulate an oscillator"
        onClick={E.lowResolutionSine.example2}
      />
    </MenuItem>
    <MenuItem caption="Sine">
      <MenuItem
        caption="1. 440Hz sine"
        onClick={E.sine.example1}
      />
    </MenuItem>
  </MenuItem>
);

export const Examples = () => (
  <TopMenuItem caption="Examples">
    <MenuItem caption="ADSR">
      <MenuItem caption="1. PWM triggers ADSR" onClick={E.adsr.example1} />
      <MenuItem caption="2. Knob triggers ADSR" onClick={E.adsr.example2} />
    </MenuItem>
    <MenuItem caption="ChangeRange">
      <MenuItem caption="1. Knob max val of sine" onClick={E.changeRange.example1} />
    </MenuItem>
    <MenuItem caption="Delay">
      <MenuItem caption="1. A sine and delayed sine summed" onClick={E.delay.example1} />
      <MenuItem caption="2. As nr. 1 but delay is sine-modulated" onClick={E.delay.example2} />
    </MenuItem>
    <DigitalLogic/>
    <Distortions/>
    <Oscillators/>
  </TopMenuItem>
);
