import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const deleteConnectionAction =
  (ids) => {
    store.dispatch({
      type: actionTypes.DELETE_CONNECTION,
      payload: {
        ids,
      },
    });
  };
