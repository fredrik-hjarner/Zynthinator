import React from 'react';
import {
// Accordion,
// Icon,
} from 'semantic-ui-react';

export const FrequencyDomainVisualizerSettingsDumb =
  props => (
    props.settingsMinimized ?
      null :
      (
        <div>
          <div>Maximum frequency in FFT: {props.maxFrequency} Hz</div>
          <div>
            <span>millisecondsBetweenUpdates: </span>
            <input
              onChange={props.handleChange}
              style={{ width: '65px' }}
              type="number"
              name="millisecondsBetweenUpdates"
              defaultValue={props.millisecondsBetweenUpdates}
              min="0"
              step="1"
            />
            ms
          </div>
          <div>
            <span>canvasWidth</span>
            <input
              onChange={props.handleChange}
              style={{ width: '65px' }}
              type="number"
              name="canvasWidth"
              defaultValue={props.canvasWidth}
              step="1"
            />
            px
          </div>
          <div>
            <span>canvasHeight</span>
            <input
              onChange={props.handleChange}
              style={{ width: '65px' }}
              type="number"
              name="canvasHeight"
              defaultValue={props.canvasHeight}
              step="1"
            />
            px
          </div>
          <div>
            <span>fftSize</span>
            <input
              onChange={props.handleChange}
              style={{ width: '65px' }}
              type="number"
              name="fftSize"
              defaultValue={props.fftSize}
              step="1"
              min="5"
              max="15"
            />
            bits
          </div>
          <div>
            <span>maxDecibels</span>
            <input
              onChange={props.handleChange}
              style={{ width: '65px' }}
              type="number"
              name="maxDecibels"
              defaultValue={props.maxDecibels}
              step="10"
            />
            dB
          </div>
          <div>
            <span>minDecibels</span>
            <input
              onChange={props.handleChange}
              style={{ width: '65px' }}
              type="number"
              name="minDecibels"
              defaultValue={props.minDecibels}
              step="10"
            />
            dB
          </div>
          <div>
            <span>smoothingTimeConstant</span>
            <input
              onChange={props.handleChange}
              style={{ width: '65px' }}
              type="number"
              name="smoothingTimeConstant"
              defaultValue={props.smoothingTimeConstant}
              step="0.01"
              min="0"
              max="1"
            />
            dB
          </div>
        </div>
      )
  );
