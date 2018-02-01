import _ from 'lodash';
import * as R from 'ramda';

export const createConnectionReducer =
  (state, { parentNodeIds, childNodes }) => {
    /**
     * Confirm that the connection is possible/valid.
     *  - That means that:
     *    * parent exists
     *    * child exists
     *    * parent output node is valid
     *    * child input node is valid
     *    * that this exact connection doesn't already exist.
     */

    /**
     * Check types. todo better to do with Flow or TypeScript.
     */
    if (
      !parentNodeIds ||
      !childNodes ||
      R.any(R.isNil, parentNodeIds) ||
      R.any(R.isNil, childNodes) ||
      R.any(
        R.compose(R.isNil, R.prop('nodeId')),
        childNodes
      )
    ) {
      debugger;
      alert('Error!');
    }

    // create the connections.
    let connectionId = state.nodeManagement.highestConnectionIdYet;

    const connectionsValues = [];
    childNodes.forEach((childNode) => {
      // connect each parent node to this child node.
      parentNodeIds.forEach((parentNodeId) => {
        // create a Connection
        connectionsValues.push({
          id: ++connectionId,
          parentNodeId,
          childNodeId: childNode.nodeId,
          childNodeInput: childNode.input,
          enabled: true
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
