import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const createNodeAction =
  (params) => {
    store.dispatch({
      type: actionTypes.CREATE_NODE,
      ...params,
    });
  };
