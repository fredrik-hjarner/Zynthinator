import { store } from 'redux/Store';
import { actionTypes } from 'redux/Constants';

export const openModalAction =
  (modal, props) => {
    store.dispatch({
      type: actionTypes.OPEN_MODAL,
      modal,
      props,
    });
  };
