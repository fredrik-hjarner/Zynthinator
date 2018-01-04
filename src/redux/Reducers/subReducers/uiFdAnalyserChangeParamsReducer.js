import * as R from 'ramda';

export const uiFdAnalyserChangeParamsReducer =
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
