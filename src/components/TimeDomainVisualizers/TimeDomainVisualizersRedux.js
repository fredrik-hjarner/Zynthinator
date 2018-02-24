import { connect } from 'react-redux';
import { TimeDomainVisualizersDumb } from './TimeDomainVisualizersDumb';
import {
  memoizedStateQueries,
} from 'redux/StateQueries';

const mapStateToProps =
  (state) => {
    /**
     * get state.ui.components by type
     */
    const uiComponentIds =
      memoizedStateQueries.getUiComponentIdsByType(state, 'TimeDomainAnalyser');
    return {
      /**
       * Get all TimeDomainAnalyser node ids.
       */
      uiComponentIds,
    };
  };

export const TimeDomainVisualizersRedux =
  connect(
    mapStateToProps,
    {},
  )(TimeDomainVisualizersDumb);
