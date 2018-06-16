import { store } from 'redux/Store';
import * as R from 'ramda';
import _ from 'lodash';
import { propInArray } from 'helpers/ramdaHelpers';

// -------------------
// Consts
// -------------------

const CREATE_TRIGGER = 'CREATE_TRIGGER';
const DELETE_TRIGGER = 'DELETE_TRIGGER';
const CLICK_TRIGGER = 'CLICK_TRIGGER';
const TRIGGER_HANDLED = 'TRIGGER_HANDLED';

// -------------------
// Actions
// -------------------

export const clickTriggerAction = (id) => {
  store.dispatch({
    type: CLICK_TRIGGER,
    id,
  });
};

export const createTriggerAction = (params) => {
  store.dispatch({
    type: CREATE_TRIGGER,
    ...params,
  });
};

export const deleteTriggerAction = (ids) => {
  store.dispatch({
    type: DELETE_TRIGGER,
    payload: {
      ids,
    },
  });
};

export const triggerHandledAction = (id) => {
  store.dispatch({
    type: TRIGGER_HANDLED,
    id,
  });
};

// -------------------
// Reducers
// -------------------

export const clickTriggerReducer = (state, action) => {
  const { id } = action;

  return R.evolve(
    {
      nodeManagement: {
        triggeredTriggers: R.unless(R.contains(id), R.append(id))
      }
    },
    state
  );
};

export const triggerHandledReducer = (state, action) => {
  const { id } = action;

  return R.evolve(
    {
      nodeManagement: {
        triggeredTriggers: R.reject(R.equals(id))
      },
    },
    state
  );
};

export const createTriggerReducer = (state, action) => {
  const { connectedToWhichNodes } = action;
  
  let triggerId = state.nodeManagement.highestTriggerIdYet;

  const triggerValues = [];
  connectedToWhichNodes.forEach((node) => {
    triggerValues.push({
      id: ++triggerId,
      connectedToWhichNode: node.nodeId,
      connectedToWhichParam: node.input,
    });
  });

  const triggers = _.keyBy(triggerValues, R.prop('id'));

  return R.evolve({
    nodeManagement: {
      highestTriggerIdYet: () => triggerId,
      triggers: R.merge(R.__, triggers),
    },
  }, state);
};

export const deleteTriggerReducer = (state, { payload: { ids } }) => R.evolve(
  {
    nodeManagement: {
      triggers: R.reject(propInArray('id', ids)),
      triggeredTriggers: R.reject(R.contains(R.__, ids)),
    },
  },
  state
);
