import * as R from 'ramda';
import {
  ramdaHelpers as RH,
} from '../../../helpers';

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

    const propInNodes =
      prop =>
        RH.propInArray(prop, nodesAsInts);

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
