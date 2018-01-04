import * as R from 'ramda';

export const openModalReducer =
  (state, action) => ({
    ...state,
    modal:
      action.modal,
    propsToModal:
      action.props,
  });

export const openModalReducer2 =
  R.flip(R.uncurryN(
    2,
    R.compose(
      R.merge,
      R.applySpec({
        modal: R.prop('modal'),
        propsToModal: R.prop('props'),
      }),
    ),
  ));
