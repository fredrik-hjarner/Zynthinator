import * as R from 'ramda';

export const clickTriggerReducer =
  (state, action) => {
    const {
      id,
    } = action;

    return R.evolve(
      {
        nodeManagement: {
          triggeredTriggers:
            R.unless(
              R.contains(id),
              R.append(id),
            ),
        },
      },
      state,
    );
  };

/**
 * clickTriggerReducer2 is out of sync now :(
 */
export const clickTriggerReducer2 =
  R.flip(R.compose(
    R.assocPath(R.__, true),
    R.insert(2, R.__, ['nodeManagement', 'triggers', 'triggered']),
    R.toString,
    R.prop('id'),
  ));
