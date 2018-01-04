import _ from 'lodash';
import * as R from 'ramda';

export const createNodeReducer =
  (state, action) => {
    const params =
      _.omit(action, 'type');
    let newState = state;
    let nodeId;
    if ('id' in action) {
      /**
       * This means that we edit a node,
       * not create.
       */
      nodeId = action.id;
    } else {
      nodeId = state.nodeManagement.highestNodeIdYet + 1;
      newState =
        R.assocPath(
          ['nodeManagement', 'highestNodeIdYet'],
          nodeId,
          state,
        );
    }

    return R.assocPath(
      ['nodeManagement', 'nodes', `${nodeId}`],
      {
        id: nodeId,
        ...params,
      },
      newState,
    );
  };
