import React, { Component } from 'react';
import { Select } from 'semantic-ui-react';

export class TimeDomainVisualizerSettingsDumb extends Component {
  renderMillisecondsBetweenUpdates = () => (
    <div>
      <span>millisecondsBetweenUpdates: </span>
      <input
        onChange={this.props.handleChange}
        style={{ width: '65px' }}
        type="number"
        name="millisecondsBetweenUpdates"
        defaultValue={this.props.millisecondsBetweenUpdates}
        min="0"
        step="1"
      />
      ms
    </div>
  )

  renderMaxValue = () => (
    <div>
      <span>maxValue: </span>
      <input
        onChange={this.props.handleChange}
        style={{ width: '65px' }}
        type="number"
        name="maxValue"
        defaultValue={this.props.maxValue}
        step="0.01"
      />
      %
    </div>
  )

  renderMinValue = () => (
    <div>
      <span>minValue</span>
      <input
        onChange={this.props.handleChange}
        style={{ width: '65px' }}
        type="number"
        name="minValue"
        defaultValue={this.props.minValue}
        step="0.01"
      />
      ms
    </div>
  )

  renderMillisecondsToRecord = () => (
    <div>
      <span>millisecondsToRecord</span>
      <Select
        name="bitsToRecord"
        onChange={this.props.handleChange}
        style={{ width: '65px' }}
        options={this.props.bitsToRecordOption}
        value={this.props.bitsToRecord}
      />
    </div>
  )

  render = () => { // eslint-disable-line
    // if (!this.props.settingsminimized) {
    //   return null;
    // }

    return (
      <div>
        {this.renderMillisecondsBetweenUpdates()}
        {this.renderMaxValue()}
        {this.renderMinValue()}
        {this.renderMillisecondsToRecord()}
      </div>
    );
  }
}
