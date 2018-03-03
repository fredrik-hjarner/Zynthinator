import React from 'react';
import {
  TopMenuItem,
  MenuItem
} from 'components/semantic++';
import * as E from 'Examples';

export const Examples = () => (
  <TopMenuItem caption="Examples">
    <MenuItem
      caption="1. Amplitude-modulated sine"
      onClick={E.example1}
    />
    <MenuItem caption="Delay">
      <MenuItem caption="1. A sine and delayed sine summed" onClick={E.delay.example1} />
      <MenuItem caption="2. As nr. 1 but delay is sine-modulated" onClick={E.delay.example2} />
    </MenuItem>
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
    </MenuItem>
  </TopMenuItem>
);
