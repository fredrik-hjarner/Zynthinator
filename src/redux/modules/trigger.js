import { store } from 'redux/Store';

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
