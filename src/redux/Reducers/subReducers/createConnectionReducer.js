import _ from 'lodash';
import * as R from 'ramda';
// import { stateQueries } from '../../StateQueries';

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
      parentNodeIds,
      childNodes,
    } = action;

    // create the connections.
    let connectionId = state.nodeManagement.highestConnectionIdYet;

    const connectionsValues = [];
    childNodes.forEach((childNode) => {
      // connect each parent node to this child node.
      parentNodeIds.forEach((parentNodeId) => {
        connectionsValues.push({
          id: ++connectionId,
          parentNodeId,
          childNodeId: childNode.nodeId,
          childNodeInput: childNode.input,
        });
      });
    });

    const connections =
      _.keyBy(connectionsValues, R.prop('id'));

    return R.evolve({
      nodeManagement: {
        highestConnectionIdYet:
          () => connectionId,
        connections:
          R.merge(R.__, connections),
      },
    }, state);
  };
