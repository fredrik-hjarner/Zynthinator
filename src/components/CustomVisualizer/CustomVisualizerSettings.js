import React from 'react';
import { Select } from 'semantic-ui-react';

export const CustomVisualizerSettings =
  props => (
    props.settingsminimized ?
      null :
      (
        <div>
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
            <span>maxValue: </span>
            <input
              onChange={props.handleChange}
              style={{ width: '65px' }}
              type="number"
              name="maxValue"
              defaultValue={props.maxValue}
              step="0.01"
            />
            %
          </div>
          <div>
            <span>minValue</span>
            <input
              onChange={props.handleChange}
              style={{ width: '65px' }}
              type="number"
              name="minValue"
              defaultValue={props.minValue}
              step="0.01"
            />
            ms
          </div>
          <div>
            <span>millisecondsToRecord</span>
            <Select
              name="bitsToRecord"
              onChange={props.handleChange}
              style={{ width: '65px' }}
              options={props.bitsToRecordOption}
              value={props.bitsToRecord}
            />
          </div>
        </div>
      )
  );
