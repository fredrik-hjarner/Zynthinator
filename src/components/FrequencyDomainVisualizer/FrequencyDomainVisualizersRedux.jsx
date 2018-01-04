import { connect } from 'react-redux';
import { FrequencyDomainVisualizersDumb } from './FrequencyDomainVisualizersDumb';
import {
  memoizedStateQueries,
} from '../../redux';

const mapStateToProps =
  (state) => {
    /**
     * get state.ui.components by type
     */
    const uiComponentIds =
      memoizedStateQueries.getUiComponentIdsByType(state, 'FrequencyDomainAnalyser');
    return {
      /**
       * Get all FrequencyDomainAnalyser node ids.
       */
      uiComponentIds,
    };
  };


export const FrequencyDomainVisualizersRedux =
  connect(
    mapStateToProps,
    {},
  )(FrequencyDomainVisualizersDumb);
