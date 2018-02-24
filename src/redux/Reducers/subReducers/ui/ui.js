import * as R from 'ramda';

// --------------------
// Reducers
// --------------------

export const closeModalReducer =
  R.flip(R.merge)({
    modal: null,
    propsToModal: null
  });

export const openModalReducer =
  (state, action) => ({
    ...state,
    modal: action.modal,
    propsToModal: action.props
  });

/**
 * Makes sure that the value is within bounds.
 * 
 * @param param Either width or height of the canvas.
 * @param value The value of either height or width.
 */
const adjustValue = (param, value) => {
  if ((param === 'canvasWidth' || param === 'canvasHeight')
  && (value === undefined || parseInt(value, 10) < 1)) {
    return '1';
  }
  return value;
};

export const uiFdAnalyserChangeParamsReducer =
  (state, action) => {
    const { id, param, value } = action;

    return R.assocPath(
      ['ui', 'components', `${id}`, param],
      adjustValue(param, value),
      state,
    );
  };

// todo this looks silly
export const uiTdAnalyserChangeParamsReducer = uiFdAnalyserChangeParamsReducer;
