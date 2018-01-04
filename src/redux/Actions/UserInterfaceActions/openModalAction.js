import {
  actionTypes,
  store,
} from './commonImports';

export const openModalAction =
  (modal, props) => {
    store.dispatch({
      type: actionTypes.OPEN_MODAL,
      modal,
      props,
    });
  };
