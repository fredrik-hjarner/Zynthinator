// import _ from 'lodash';
import * as R from 'ramda';
import { stateQueries } from '../../StateQueries';

export const createConnectionReducer =
  (state, action) => {
    /**
     * Confirm that the connection is possible/valid.
     *  - That means that:
     *    * parent exists
     *    * child exists
     *    * parent output node is valid
     *    * child input node is valid
     *    * that this exact connection doesn't already exist.
     */
    const {
      parentNodeId,
      childNodeId,
      childNodeInput,
    } = action;

    const {
      nodes,
    } = state.nodeManagement;

    if (stateQueries.doesNodeWithIdExist({ nodes, nodeId: parentNodeId }) &&
        stateQueries.doesNodeWithIdExist({ nodes, nodeId: childNodeId }) &&
        stateQueries.doesNodeHaveInputWithName({ nodes, nodeId: childNodeId, inputName: childNodeInput })
    ) {
      // create the connection.
      const connectionId = state.nodeManagement.highestConnectionIdYet + 1;

      const connection = {
        id: connectionId,
        parentNodeId,
        childNodeId,
        childNodeInput,
      };

      return R.evolve({
        nodeManagement: {
          highestConnectionIdYet:
            () => connectionId,
          connections:
            R.assoc(`${connectionId}`, connection),
        },
      }, state);
    }

    alert('Error!');
    debugger;
    return state;
  };
