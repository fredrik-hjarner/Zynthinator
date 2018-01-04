import * as R from 'ramda';

export const closeModalReducer =
  state => ({
    ...state,
    modal:
      null,
    propsToModal:
      null,
  });

export const closeModalReducer2 =
  R.merge({
    modal:
      null,
    propsToModal:
      null,
  });
