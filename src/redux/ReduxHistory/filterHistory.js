import * as R from 'ramda';

/**
 * A problem I had was that recording all actions
 * took extremely big space, since every onChange
 * on the knobs generated an action.
 * 
 * @param history an array of redux actions.
 */
export const filterHistory =
  (history) => {
    /**
     * For two following MOVE_KNOB actions with the same 'id'
     * remove the first one of them.
     */
    const areMoveKnobActionsDups =
      (a1, a2) =>
        a1.type === 'MOVE_KNOB' &&
        a2.type === 'MOVE_KNOB' &&
        a1.id === a2.id;

    const areFdAnalyserChangeParamsActionsDups =
      (a1, a2) =>
        a1.type === 'UI_FD_ANALYSER_CHANGE_PARAMS' &&
        a2.type === 'UI_FD_ANALYSER_CHANGE_PARAMS' &&
        a1.id === a2.id &&
        a1.param === a2.param;

    const areTdAnalyserChangeParamsActionsDups =
      (a1, a2) =>
        a1.type === 'UI_TD_ANALYSER_CHANGE_PARAMS' &&
        a2.type === 'UI_TD_ANALYSER_CHANGE_PARAMS' &&
        a1.id === a2.id &&
        a1.param === a2.param;

    return R.compose(
      R.reverse,
      R.dropRepeatsWith(areTdAnalyserChangeParamsActionsDups),
      R.dropRepeatsWith(areFdAnalyserChangeParamsActionsDups),
      R.dropRepeatsWith(areMoveKnobActionsDups),
      R.reverse,
    )(history);
  };

  /**
   * {
      "type": "MOVE_KNOB",
      "id": 2,
      "value": 11.380405975792664
    },
   */
