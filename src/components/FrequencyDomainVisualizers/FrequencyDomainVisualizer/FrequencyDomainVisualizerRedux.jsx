import { connect } from 'react-redux';
import {
  stateQueries,
} from 'redux/StateQueries';
import { FrequencyDomainVisualizerControlled } from './FrequencyDomainVisualizerControlled';

const mapStateToProps =
  (state, ownProps) => {
    const id = ownProps.uiComponentId;
    const uiComponent =
      stateQueries.getAllUiComponents(state)[id];
    return {
      uiComponent,
    };
  };

export const FrequencyDomainVisualizerRedux =
  connect(mapStateToProps)(FrequencyDomainVisualizerControlled);
