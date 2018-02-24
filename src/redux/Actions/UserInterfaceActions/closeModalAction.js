import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const closeModalAction =
  () => {
    store.dispatch({
      type: actionTypes.CLOSE_MODAL,
    });
  };
