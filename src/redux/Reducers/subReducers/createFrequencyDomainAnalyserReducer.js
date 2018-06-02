import * as R from 'ramda';
import { createNodeReducer } from 'redux/modules/node';

export const createFrequencyDomainAnalyserReducer = (state, action) => {
  /**
   * First add the node 'normally'.
   */
  let newState = createNodeReducer(state, action);

  /**
   * If the component was just updated and not created
   * then don't create another UI component.
   */
  if (action.id) {
    return newState;
  }

  /**
   * Then add the UI state stuff.
   */
  const nodeId = newState.nodeManagement.highestNodeIdYet;

  const componentId = newState.ui.highestIdYet + 1;

  // update id counter.
  newState =
    R.assocPath(
      ['ui', 'highestIdYet'],
      componentId,
      newState,
    );

  /**
   * Add the UI component
   */
  return R.assocPath(
    ['ui', 'components', `${componentId}`],
    {
      id: componentId,
      type: 'FrequencyDomainAnalyser',
      nodeId,
      millisecondsBetweenUpdates: 40, // default value
      // maxValue: 1, // default value
      // minValue: -1, // default value
      canvasWidth: 350, // default value
      canvasHeight: 80, // default value
      fftSize: 12, // default == 2**11
      maxDecibels: -30, // default == -30
      minDecibels: -100, // default == -100
      smoothingTimeConstant: 0, // default is 0.8
    },
    newState,
  );
};
