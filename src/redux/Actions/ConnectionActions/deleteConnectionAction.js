import {
  actionTypes,
  store,
} from './commonImports';

export const deleteConnectionAction =
  (ids) => {
    store.dispatch({
      type: actionTypes.DELETE_CONNECTION,
      payload: {
        ids,
      },
    });
  };
