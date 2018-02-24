import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const createGroupAction =
  (params) => {
    store.dispatch({
      type: actionTypes.CREATE_GROUP,
      ...params,
    });
  };
