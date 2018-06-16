import { store } from 'redux/Store';
import _ from 'lodash';
import * as R from 'ramda';

// -------------------
// Consts
// -------------------

const CREATE_GROUP = 'CREATE_GROUP';

// -------------------
// Actions
// -------------------

export const createGroupAction = (params) => {
  store.dispatch({
    type: CREATE_GROUP,
    ...params,
  });
};

// -------------------
// Reducers
// -------------------

export const createGroupReducer = (state, action) => {
  const params = _.omit(action, 'type');

  const groupId = state.nodeManagement.highestGroupIdYet + 1;

  const group = {
    id: groupId,
    ...params,
  };

  return R.evolve({
    nodeManagement: {
      highestGroupIdYet: () => groupId,
      groups: R.assoc(`${groupId}`, group),
    },
  }, state);
};
