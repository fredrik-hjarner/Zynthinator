import _ from 'lodash';
import * as R from 'ramda';

export const createGroupReducer =
  (state, action) => {
    const params =
    _.omit(action, 'type');

    const groupId =
      state.nodeManagement.highestGroupIdYet + 1;

    const group = {
      id:
        groupId,
      ...params,
    };

    return R.evolve({
      nodeManagement: {
        highestGroupIdYet:
          () => groupId,
        groups:
          R.assoc(`${groupId}`, group),
      },
    }, state);
  };
