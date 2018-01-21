import React from 'react';
import _ from 'lodash';
import {
  TopMenuItem,
  MenuItem
} from '../primitive-building-blocks';
import { openModalAction } from '../../../redux';

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
      </MenuItem>
      {nodeItem('ChangeRange', 'ChangeRange')}
      {nodeItem('Delay')}
      <MenuItem caption="Filters">
        {nodeItem('BandPassFilter', 'Band-pass filter')}
        {nodeItem('HighPassFilter', 'High-pass filter')}
        {nodeItem('LowPassFilter', 'Low-pass filter')}
      </MenuItem>
      {nodeItem('Gain')}
      <MenuItem caption="Waveforms">
        {nodeItem('DcSignal', 'DC signal')}
        {nodeItem('DigitalSignal')}
        {nodeItem('LowResolutionSine', 'Low-resolution sine')}
        {nodeItem('Noise')}
        {nodeItem('Oscillator')}
        {nodeItem('PWM', 'PWM')}
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
