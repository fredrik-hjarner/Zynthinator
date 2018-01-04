import * as R from 'ramda';

export const uiTdAnalyserChangeParamsReducer =
  (state, action) => {
    const {
      id,
      param,
      value,
    } = action;

    return R.assocPath(
      ['ui', 'components', `${id}`, param],
      value,
      state,
    );
  };
