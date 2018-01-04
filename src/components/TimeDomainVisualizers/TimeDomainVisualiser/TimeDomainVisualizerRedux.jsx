import { connect } from 'react-redux';
import { TimeDomainVisualizerControlled } from './TimeDomainVisualizerControlled';
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

export const TimeDomainVisualizerRedux =
  connect(mapStateToProps)(TimeDomainVisualizerControlled);
