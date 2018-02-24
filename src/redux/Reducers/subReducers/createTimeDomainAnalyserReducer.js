import * as R from 'ramda';
import { createNodeReducer } from './node/node';

export const createTimeDomainAnalyserReducer =
  (state, action) => {
    /**
     * First add the node 'normally'.
     */
    let newState = createNodeReducer(state, action);

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
        type: 'TimeDomainAnalyser',
        nodeId,
        millisecondsBetweenUpdates: 40, // default value
        maxValue: 1, // default value
        minValue: -1, // default value
        canvasWidth: 350, // default value
        canvasHeight: 80, // default value
        bitsToRecord: 11, // default value 2 ** 11
      },
      newState,
    );
  };
