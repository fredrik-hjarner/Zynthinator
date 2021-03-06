import React from 'react';
import _ from 'lodash';
import {
  TopMenuItem,
  MenuItem
} from 'components/semantic++';
import { openModalAction } from 'redux/modules/ui';

const nodeItem =
  (nodeType, asReadable) => (
    <MenuItem
      caption={asReadable || _.upperFirst(_.lowerCase(nodeType))}
      onClick={() => openModalAction('CreateNodeModal', { nodeType })}
    />
  );

export const Create = () => (
  <TopMenuItem caption="Create">
    <MenuItem caption="Node">
      {nodeItem('ADSR', 'ADSR')}
      <MenuItem caption="Analysers">
        {nodeItem('FrequencyDomainAnalyser')}
        {nodeItem('TimeDomainAnalyser')}
        {nodeItem('CustomAnalyser', 'My CustomAnalyser based AudioWorklet')}
      </MenuItem>
      {nodeItem('ChangeRange', 'ChangeRange')}
      <MenuItem caption="Chords">
        {/* {nodeItem('HarmonicChord')} */}
        {nodeItem('MajorTriad')}
        {nodeItem('PerfectFifth')}
      </MenuItem>
      {nodeItem('Delay')}
      <MenuItem caption="Digital logic">
        {nodeItem('TwowaySwitch')}
        {nodeItem('SchmittTrigger')}
      </MenuItem>
      <MenuItem caption="Distortions">
        {nodeItem('CrossoverDistortion')}
      </MenuItem>
      {nodeItem('Echo')}
      {nodeItem('Echo2')}
      <MenuItem caption="Filters">
        {nodeItem('BandPassFilter', 'Band-pass filter')}
        {nodeItem('HighPassFilter', 'High-pass filter')}
        {nodeItem('LowPassFilter', 'Low-pass filter')}
      </MenuItem>
      {nodeItem('Gain')}
      <MenuItem caption="Quantizers">
        {nodeItem('Quantizer')}
        {nodeItem('TimeQuantizer')}
      </MenuItem>
      <MenuItem caption="Waveforms">
        {nodeItem('DcSignal', 'DC signal')}
        {nodeItem('DigitalSequence')}
        {nodeItem('LowResolutionSine', 'Low-resolution sine')}
        {nodeItem('Noise')}
        {nodeItem('Oscillator')}
        {nodeItem('PWM', 'PWM')}
        {/* {nodeItem('RandomDigitalSignal')} */}
      </MenuItem>
    </MenuItem>
    <MenuItem
      caption="Trigger"
      onClick={() => openModalAction('CreateTriggerModal')}
    />
    <MenuItem
      caption="Knob"
      onClick={() => openModalAction('CreateKnobModal')}
    />
  </TopMenuItem>
);
