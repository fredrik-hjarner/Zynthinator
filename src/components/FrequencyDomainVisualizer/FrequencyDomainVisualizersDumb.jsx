import React from 'react';
import {
  FrequencyDomainVisualizer,
} from './FrequencyDomainVisualizer';
import {
  SimpleWindowRedux,
} from '../SimpleWindow';

export const FrequencyDomainVisualizersDumb =
  (props) => {
    const analysers =
      Object.values(props.uiComponentIds).map(uiComponentId => (
        <FrequencyDomainVisualizer
          uiComponentId={uiComponentId}
        />
      ));
    return (
      <SimpleWindowRedux title="Frequency-Domain Analysers">
        {analysers}
      </SimpleWindowRedux>
    );
  };
