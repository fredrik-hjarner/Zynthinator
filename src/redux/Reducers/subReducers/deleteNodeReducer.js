import * as R from 'ramda';

export const deleteNodeReducer =
  (state, action) => {
    const { nodeId } = action;

    return R.evolve({
      nodeManagement: {
        nodes:
          R.dissoc(`${nodeId}`),
        connections:
          R.reject(R.either(
            R.propEq('parentNodeId', nodeId),
            R.propEq('childNodeId', nodeId),
          )),
        knobs: R.reject(R.propEq('connectedToWhichNode', nodeId)),
        triggers: R.reject(R.propEq('connectedToWhichNode', nodeId)),
      },
      /**
       * todo, this is crap. should probably not looks for deleted
       * Analysers when deleting every node type.
       */
      ui: {
        components: R.reject(R.propEq('nodeId', nodeId)),
      },
    }, state);
  };

/* export const deleteNodeReducer2 =
  // action =>
  R.compose(
    R.evole,
    R.assocPath(['nodeManagement', 'nodes'], R.__, {}),
    R.dissoc,
    R.toString,
    R.prop('nodeId'),
  ); */
