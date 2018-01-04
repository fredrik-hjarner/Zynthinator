import {
  actionTypes,
  store,
} from './commonImports';

export const closeModalAction =
  () => {
    store.dispatch({
      type: actionTypes.CLOSE_MODAL,
    });
  };
