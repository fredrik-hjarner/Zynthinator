import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const createConnectionAction =
  (params) => {
    store.dispatch({
      type: actionTypes.CREATE_CONNECTION,
      ...params,
    });
  };
