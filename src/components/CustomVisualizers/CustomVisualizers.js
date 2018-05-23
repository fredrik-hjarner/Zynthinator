import React from 'react';
import { connect } from 'react-redux';
import { memoizedStateQueries } from 'redux/StateQueries';
import { CustomVisualizer } from './CustomVisualizer';
import { SimpleWindow } from '../SimpleWindow';

const mapStateToProps = (state) => {
  /**
   * get state.ui.components by type
   */
  const uiComponentIds = memoizedStateQueries.getUiComponentIdsByType(state, 'CustomAnalyser');
  return {
    /**
     * Get all CustomAnalyser node ids.
     */
    uiComponentIds,
  };
};

@connect(mapStateToProps)
export class CustomVisualizers extends React.Component {
  render() {
    const { props } = this;
    const analysers =
      Object.values(props.uiComponentIds).map(uiComponentId => (
        <CustomVisualizer
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
  }
}
