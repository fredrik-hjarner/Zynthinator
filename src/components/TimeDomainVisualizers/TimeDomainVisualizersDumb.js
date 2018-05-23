import React from 'react';
import {
  TimeDomainVisualiser,
} from './TimeDomainVisualiser';
import {
  SimpleWindow,
} from '../SimpleWindow';

export const TimeDomainVisualizersDumb =
  (props) => {
    const analysers =
      Object.values(props.uiComponentIds).map(uiComponentId => (
        <TimeDomainVisualiser
          uiComponentId={uiComponentId}
        />
      ));

    if (analysers.length < 1) {
      return null;
    }
      
    return (
      <SimpleWindow title="Time-Domain Analysers">
        {analysers}
      </SimpleWindow>
    );
  };
