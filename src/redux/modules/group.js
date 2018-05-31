import { store } from 'redux/Store';

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
