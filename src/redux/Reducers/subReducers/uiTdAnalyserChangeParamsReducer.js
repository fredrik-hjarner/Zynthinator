import * as R from 'ramda';

export const uiTdAnalyserChangeParamsReducer =
  (state, action) => {
    const {
      id,
      param,
    } = action;

    let {
      value,
    } = action;

    if (param === 'canvasWidth' || param === 'canvasHeight') {
      if (value === undefined || parseInt(value, 10) < 1) {
        value = '1';
      }
    }

    return R.assocPath(
      ['ui', 'components', `${id}`, param],
      value,
      state,
    );
  };
