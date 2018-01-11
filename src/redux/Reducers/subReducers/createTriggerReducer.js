import * as R from 'ramda';
import _ from 'lodash';

export const createTriggerReducer =
  (state, action) => {
    const {
      connectedToWhichNodes,
    } = action;
    
    let triggerId = state.nodeManagement.highestTriggerIdYet;

    const triggerValues = [];
    connectedToWhichNodes.forEach((node) => {
      triggerValues.push({
        id: ++triggerId,
        connectedToWhichNode: node.nodeId,
        connectedToWhichParam: node.input,
      });
    });

    const triggers =
      _.keyBy(triggerValues, R.prop('id'));

    return R.evolve({
      nodeManagement: {
        highestTriggerIdYet: () => triggerId,
        triggers: R.merge(R.__, triggers),
      },
    }, state);
  };
