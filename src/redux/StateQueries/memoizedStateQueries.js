// import _ from 'lodash';
import * as R from 'ramda';
import { createSelector } from 'reselect';
import { stateQueries } from './stateQueries';
import {
  ramdaHelpers as RH,
} from '../../helpers';
import { getAllNodes } from './new-state-queries/node-queries';

/**
 * Private helpers
 */

class MemoizedStateQueries {
  /**
  * @param state
  */
  getNodesThatHaveOutputs =
    createSelector(
      [getAllNodes],
      R.filter(stateQueries.getOutputOfNode),
    )

  /**
   * Returns an object.
   * @param state
   */
  getNodesThatHaveConnectableInputs =
    createSelector(
      [getAllNodes],
      R.pickBy(stateQueries.nodeHasConnectableInputs),
    )

  getNodesThatHaveTriggerableInputs =
    createSelector(
      [getAllNodes],
      R.pickBy(stateQueries.nodeHasTriggerableInputs),
    )

  /**
   * So, the goal is to first have a func memoized for getAllNodes.
   * If getAllNodes is equal then it will return the same FUNCTION
   * that is memoized for type,
   *
   * If getAllNodes is not equal then it will return the ANOTHER function
   * that is memoized for type,
   */
  getNodesByType = // todo this looks so ugly :'|
    (state, type) =>
      this._getNodesByType(state)(type)

  _getNodesByType =
    // R.uncurryN(
    //  2,
      createSelector(
        [getAllNodes],
        nodes =>
          R.memoizeWith(
            R.identity,
            type =>
              R.filter(R.propEq('nodeType', type), nodes),
          ),
      ) // ,
  // )

  /**
   * Returns an object.
   * Each string is key:ed by the node:s id.
   * @param state
   */
  getAllNodesInReadableFormat =
    createSelector(
      [getAllNodes],
      R.map(stateQueries.getNodeInReadableFormat),
    )

  /**
   * Created 2017-01-20
   * byId
   */
  _getConnectionInReadableFormat =
    createSelector(
      [getAllNodes, stateQueries.getAllConnections],
      (nodes, connections) => (connectionId) => {
        const conn = connections[connectionId];
        const parentNodeAsString =
          stateQueries.getNodeByIdInReadableFormat(nodes, conn.parentNodeId);
        const childNodeAsString =
          stateQueries.getNodeByIdInReadableFormat(nodes, conn.childNodeId);
        const childNodeInputAsString =
          (conn.childNodeInput === 'input') ? '' : `.${conn.childNodeInput}`;
        return `${parentNodeAsString} ${'\u2192'} ${childNodeAsString}${childNodeInputAsString}`;
      },
    )

  /**
   * Todo. This is absolutely not memoized correctly :/
   */
  getConnectionInReadableFormat =
    (state, connectionId) =>
      this._getConnectionInReadableFormat(state)(connectionId)

  /**
   * Creates format used by "Disconnect Nodes".
   *  [
   *    { text: 'Oscillator => Gain', value: '1'},
   *    { text: '', value: ''},
   *    ...,
   *  ];
   */
  getConnectionsInReadableFormat =
    createSelector(
      [getAllNodes, stateQueries.getAllConnections],
      (nodes, connections) =>
        Object.values(connections).map((conn) => {
          const parentNodeAsString =
            stateQueries.getNodeByIdInReadableFormat(nodes, conn.parentNodeId);
          const childNodeAsString =
            stateQueries.getNodeByIdInReadableFormat(nodes, conn.childNodeId);
          const childNodeInputAsString =
            (conn.childNodeInput === 'input') ? '' : `.${conn.childNodeInput}`;
          return {
            value: conn.id,
            text: `${parentNodeAsString} ${'\u2192'} ${childNodeAsString}${childNodeInputAsString}`,
          };
        }),
    )

  /**
   * Simply adds together all
   * inputNode, outputNode och otherNodes-arrayen
   * Returns an array.
   * @param state
   */ 
  getAllGroupedNodes =
    createSelector(
      [stateQueries.getAllGroups],
      R.compose(
        R.uniq,
        R.flatten,
        R.map(stateQueries.getAllNodeIdsInGroup),
        R.values,
      ),
    )

  getAllUngroupedNodes =
    createSelector(
      [getAllNodes, this.getAllGroupedNodes],
      (nodes, groupedNodes) =>
        R.difference(R.values(nodes), groupedNodes),
    )

  getAllNodesThatAreChildren =
    createSelector(
      [stateQueries.getAllConnections],
      R.compose(
        R.uniq,
        R.flatten,
        R.map(R.prop('childNodeId')),
        R.values,
      ),
    )

  /**
   * So, the goal is to first have a func memoized for getAllNodes.
   * If getAllNodes is equal then it will return the same FUNCTION
   * that is memoized for type,
   *
   * If getAllNodes is not equal then it will return the ANOTHER function
   * that is memoized for type,
   */
  getUiComponentsByType = // todo this looks so ugly :'|
    (state, type) =>
      this._getUiComponentsByType(state)(type)
  
  _getUiComponentsByType =
    createSelector(
      [stateQueries.getAllUiComponents],
      uiComponents =>
        R.memoizeWith(
          R.identity,
          type =>
            R.filter(R.propEq('type', type), uiComponents),
        ),
    )

  /**
   * helper function beccause I want to memoize
   * output and not, like normally, input.
   */
  _getUiComponentIdsByType =
    (state, type) =>
      Object.keys(this.getUiComponentsByType(state, type));
  
  /**
   * returns an array of ids
   * 
   * @param state
   * @param type
   */
  getUiComponentIdsByType =
    RH.valEqArrayReturnsEqArray(this._getUiComponentIdsByType)

  /**
   *  [
   *    {
   *      key: `${nodeId}${input}`,
   *      value: { nodeId :int, input :str },
   *      text: nodeInReadableFormat + input,
   *    },
   *  ]
   */
  getChildNodesForCreateConnectionModal = (state) => {
    // get all nodes with inputs
    const nodes = Object.values(this.getNodesThatHaveConnectableInputs(state));

    // in readable format
    const nodesInReadableFormat = nodes.map(stateQueries.getNodeInReadableFormat);
    
    // get the params of them all.
    const inputsForEachNode = nodes.map(stateQueries.getConnectableInputsOfNode);
    
    // combine them all
    const output = [];
    nodes.forEach((node, i) => {
      inputsForEachNode[i].forEach((input) => {
        output.push({
          key: `${node.id}${input}`,
          value: { nodeId: node.id, input },
          text: `${nodesInReadableFormat[i]}.${input}`,
        });
      });
    });

    return output;
  }

    /**
     *  [
     *    {
     *      key: `${nodeId}${triggerableInput}`,
     *      value: { nodeId :int, triggerableInput :str },
     *      text: nodeInReadableFormat + triggerableInput,
     *    },
     *  ]
     */
    getNodesForCreateTriggerModal =
      (state) => {
        // get all nodes with inputs
        const nodes =
          Object.values(this.getNodesThatHaveTriggerableInputs(state));

        // in readable format
        const nodesInReadableFormat =
          nodes.map(stateQueries.getNodeInReadableFormat);
        
        // get the params of them all.
        const inputsForEachNode =
          nodes.map(stateQueries.getTriggerableInputsOfNode);
        
        // combine them all
        const output = [];
        nodes.forEach((node, i) => {
          inputsForEachNode[i].forEach((input) => {
            output.push({
              key: `${node.id}${input}`,
              value: { nodeId: node.id, input },
              text: `${nodesInReadableFormat[i]}.${input}`,
            });
          });
        });

        return output;
      }
}

export const memoizedStateQueries = new MemoizedStateQueries();
