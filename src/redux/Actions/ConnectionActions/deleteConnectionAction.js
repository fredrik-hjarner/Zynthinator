import {
  actionTypes,
  store,
} from './commonImports';

export const deleteConnectionAction =
  ({
    connectionId,
  }) => {
    store.dispatch({
      type: actionTypes.DELETE_CONNECTION,
      connectionId,
    });
  };
