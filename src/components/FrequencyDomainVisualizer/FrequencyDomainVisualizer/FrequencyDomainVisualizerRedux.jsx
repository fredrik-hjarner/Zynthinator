import { connect } from 'react-redux';
import { FrequencyDomainVisualizerControlled } from './FrequencyDomainVisualizerControlled';
import {
  stateQueries,
} from '../../../redux';

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
