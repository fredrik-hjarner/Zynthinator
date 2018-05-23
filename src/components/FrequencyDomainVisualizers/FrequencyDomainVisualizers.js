import React from 'react';
import { FrequencyDomainVisualizer } from './FrequencyDomainVisualizer';
import { SimpleWindow } from 'components/SimpleWindow';
import { connect } from 'react-redux';
import { memoizedStateQueries } from 'redux/StateQueries';

const FrequencyDomainVisualizers = (props) => {
  const analysers =
    Object.values(props.uiComponentIds).map(uiComponentId => (
      <FrequencyDomainVisualizer
        uiComponentId={uiComponentId}
      />
    ));

  if (analysers.length < 1) {
    return null;
  }

  return (
    <SimpleWindow title="Frequency-Domain Analysers">
      {analysers}
    </SimpleWindow>
  );
};

const mapStateToProps = (state) => {
  /**
   * get state.ui.components by type
   */
  const uiComponentIds = memoizedStateQueries.getUiComponentIdsByType(state, 'FrequencyDomainAnalyser');
  return {
    /**
     * Get all FrequencyDomainAnalyser node ids.
     */
    uiComponentIds,
  };
};

const FrequencyDomainVisualizersRedux = connect(mapStateToProps)(FrequencyDomainVisualizers);

export { FrequencyDomainVisualizersRedux as FrequencyDomainVisualizers };
