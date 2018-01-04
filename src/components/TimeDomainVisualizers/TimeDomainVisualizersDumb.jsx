import React from 'react';
import {
  TimeDomainVisualiser,
} from './TimeDomainVisualiser';
import {
  SimpleWindowRedux,
} from '../SimpleWindow';

export const TimeDomainVisualizersDumb =
  (props) => {
    const analysers =
      Object.values(props.uiComponentIds).map(uiComponentId => (
        <TimeDomainVisualiser
          uiComponentId={uiComponentId}
        />
      ));
    return (
      <SimpleWindowRedux title="Time-Domain Analysers">
        {analysers}
      </SimpleWindowRedux>
    );
  };
