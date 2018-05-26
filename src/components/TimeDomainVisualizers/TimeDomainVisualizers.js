import React, { Component } from 'react';
import { TimeDomainVisualizer } from './TimeDomainVisualizer';
import { SimpleWindow } from '../SimpleWindow';
import { connect } from 'react-redux';
import { memoizedStateQueries } from 'redux/StateQueries';

const mapStateToProps = state => ({
  uiComponentIds: memoizedStateQueries.getUiComponentIdsByType(state, 'TimeDomainAnalyser')
});

@connect(mapStateToProps)
export class TimeDomainVisualizers extends Component {
  render = () => {
    const analysers = Object.values(this.props.uiComponentIds).map(uiComponentId => (
      <TimeDomainVisualizer uiComponentId={uiComponentId} />
    ));

    if (analysers.length < 1) {
      return null;
    }
      
    return (
      <SimpleWindow title="Time-Domain Analysers">
        {analysers}
      </SimpleWindow>
    );
  }
}
