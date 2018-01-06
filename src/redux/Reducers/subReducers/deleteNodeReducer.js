import * as R from 'ramda';

export const deleteNodeReducer =
  (state, action) => {
    const {
      // nodeId,
      nodes,
    } = action;

    const nodesAsInts =
      R.map(
        R.curry(parseInt)(R.__, 10),
        nodes,
      );

    const propInArray = // todo move this into ramdaHelpers
      (prop, array) => 
        R.propSatisfies(
          R.contains(R.__, array),
          prop,
        );

    const propInNodes =
      prop =>
        propInArray(prop, nodesAsInts);

    return R.evolve({
      nodeManagement: {
        nodes:
          R.reject(propInNodes('id')),
        connections:
          R.reject(R.either(
            propInNodes('parentNodeId'),
            propInNodes('childNodeId'),
          )),
        knobs:
          R.reject(propInNodes('connectedToWhichNode')),
        triggers:
          R.reject(propInNodes('connectedToWhichNode')),
      },
      /**
       * todo, this is crap. should probably not looks for deleted
       * Analysers when deleting every node type.
       */
      ui: {
        components:
          R.reject(propInNodes('nodeId')),
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
