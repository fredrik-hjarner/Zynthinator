import * as R from 'ramda';
// import * as RA from 'ramda-adjunct';

export const createKnobReducer =
  (state, action) => {
    const {
      type,
      ...params
    } = action;
    const knobId =
      state.nodeManagement.highestKnobIdYet + 1;

    const knob = {
      id:
        knobId,
      ...params,
    };

    return R.evolve({
      nodeManagement: {
        highestKnobIdYet:
          () => knobId,
        knobs:
          R.assoc(`${knobId}`, knob),
      },
    }, state);
  };

export const createKnobReducer2 =
  (state, action) => {
    const knobId =
      state.nodeManagement.highestKnobIdYet + 1;

    const knob =
      R.compose(
        /* R.merge({
          id: knobId,
        }), */
        R.assoc('id', knobId),
        R.dissoc('type'),
      )(action);

    R.compose(
      R.evolve,
      R.useWith(
        R.merge,
        [
          R.compose(
            R.assoc('highestKnobIdYet', R.__, {}),
            R.always,
          ),
          R.compose(
            R.assoc('knobs', R.__, {}),
            R.useWith(
              R.assocPath,
              [
                R.toString,
                R.identity,
              ],
            ),
          ),
        ],
      ),
    )(knobId, knob);
  };

/**
 * (state, action) -> state
 */
export const createKnobReducer3 =
  R.compose(
    R.useWith(
      R.identity,
      [
        R.assoc('id', R.__, {}),  // highestKnobIdYet + 1 -> { id: highestKnobIdYet + 1 }
        
        R.identity,               // state -> state
      ],
    ),
    R.useWith(                    // [highestKnobIdYet + 1, action - type, state]
      R.identity,
      [
        R.compose(                // highestKnobIdYet + 1
          R.inc,
          R.path(['state', 'nodeManagement', 'highestKnobIdYet']),
        ),
        R.dissoc('type'),         // action without 'type' prop
        R.identity,               // state -> state
      ],
    ),
    R.chain(R.append, R.head),    // [state, action] -> [state, action, state]
    R.unapply(R.identity),        // (state, action) -> [state, action]
  );

const assocEmpty = // eslint-disable-line
  R.assoc(R.__, R.__, {});

const objFromArgs =
  R.uncurryN(
    2,
    keysArray =>
      (...args) =>
        R.zipObj(keysArray, args),
  );

const objCopyProp = // eslint-disable-line
  (from, to) => // eslint-disable-line
    R.chain(
      R.assoc('knob'),
      R.converge(
        R.merge,
        [
          R.pick('nodeId'),
          R.prop('knob'),
        ],
      ),
    );

/**
 * (state, action) -> state
 */
export const createKnobReducer4 =
  R.compose(
    R.chain(
      R.mergeDeepLeft,
      R.applySpec({
        nodeManagement: {
          highestKnobIdYet:
            R.prop('nodeId'),
          knobs:
            R.converge(
              R.assocPath(R.__, R.__, {}),
              [
                R.compose(R.toString, R.prop('nodeId')),
                R.prop('knob'),
              ],
            ),
        },
      }),
    ),
    R.chain(
      R.assoc('knob'), // this seems unoptimal
      R.converge(
        R.merge,
        [
          R.pick('nodeId'),
          R.prop('knob'),
        ],
      ),
    ),
    R.chain(
      R.assoc('nodeId'),
      R.compose(
        R.inc,
        R.path(['state', 'nodeManagement', 'highestKnobIdYet']),
      ),
    ),
    R.dissocPath(['knob', 'type']),
    objFromArgs(['state', 'knob']),
  );
