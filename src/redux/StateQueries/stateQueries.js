import _ from 'lodash';
import * as R from 'ramda';
import {
  createSelector,
} from 'reselect';
import {
  initialState,
} from '../InitialState';
import { nodeTypeDefinitions } from '../../NodeTypeDefinitions'; // todo. cheating. I dont take it from state.

class StateQueries {
  getAllNodes =
    (state) => {
      if (state === undefined
      || state === null
      || state.nodeManagement === undefined
      || state.nodeManagement === null) {
        debugger;
      }
      return state.nodeManagement.nodes;
    }

  getAllNodeValues =
    createSelector(
      [this.getAllNodes],
      R.values,
    )

  getAllNodeIds =
    createSelector(
      [this.getAllNodeValues],
      R.map(R.prop('id')),
    )

  getAllConnections =
    state =>
      state.nodeManagement.connections

  getAllConnectionValues =
    createSelector(
      [this.getAllConnections],
      R.values,
    )

  getAllGroups =
    state =>
      state.nodeManagement.groups

  getAllGroupValues =
    createSelector(
      [this.getAllGroups],
      R.values,
    )

  getAllUiComponents =
    state =>
      state.ui.components;

  /**
   * Returns an array of triggered trigger id:s
   */
  getAllTriggeredTriggerIds =
    R.path(['nodeManagement', 'triggeredTriggers'])

  getAllTriggers =
    R.path(['nodeManagement', 'triggers'])

  getAllTriggeredTriggers =
    createSelector(
      [this.getAllTriggeredTriggerIds, this.getAllTriggers],
      R.useWith(
        R.props,
        [R.map(R.toString), R.identity],
      ),
    )

  /**
   * 
   */
  /* nodeHasInputs =
    R.pathSatisfies(R.gt(R.__, 0), ['inputs', 'length']); */
  nodeHasConnectableInputs =
    (node) => {
      const inputs =
        this.getConnectableInputsOfNode(node);
      return inputs.length > 0;
    }

  nodeHasKnobableInputs =
    (node) => {
      const inputs =
        this.getKnobableInputsOfNode(node);
      return inputs.length > 0;
    }

  nodeHasTriggerableInputs =
    (node) => {
      const inputs =
        this.getTriggerableInputsOfNode(node);
      return inputs.length > 0;
    }

  /**
   * @param group
   */
  getAllNodeIdsInGroup =
    R.props(['inputNode', 'outputNode', 'otherNodes'])

  /**
   * node not nodeId!
   */
  getNodeInReadableFormat =
    (node) => {
      if (node === undefined || node === null) {
        debugger;
      }
      if (node.name !== '' && node.name !== undefined && node.name !== null) {
        return node.name;
      }
      if (node.nodeType === 'Oscillator') {
        return `id${node.id}_${node.oscillatorType}_${node.frequency}Hz`;
      } else if (node.nodeType === 'Gain') {
        return `id${node.id}_${node.nodeType}_${node.gain}`;
      }
      return `id${node.id}_${node.nodeType}`;
    }

  /**
   * nodeId not node!
   * @param nodes
   * @param nodeId
   */
  getNodeByIdInReadableFormat =
    R.compose(this.getNodeInReadableFormat, R.flip(R.prop))

  doesNodeWithIdExist =
    ({
      nodes,
      nodeId,
    }) =>
      nodeId in nodes;

  /**
   * Todo. I don't like this interface.
   * nodes and nodeId wtf?
   */
  doesNodeHaveInputWithName =
    ({
      nodes,
      nodeId,
      inputName,
    }) => {
      const node =
        nodes[nodeId];
      const inputs =
        this.getConnectableInputsOfNode(node);
      return inputs.includes(inputName);
    };

  /**
   * Return an array of parentNodeIds.
   */
  getParentsOfNode =
    (connections, nodeId) =>
      R.map(
        R.prop('parentNodeId'),
        R.filter(R.propEq('childNodeId', nodeId), R.values(connections)),
      )

  getChildrenIdsOfNodeWithId =
    (connections, nodeId) =>
      R.map(
        R.prop('childNodeId'),
        R.filter(R.propEq('parentNodeId', nodeId), R.values(connections)),
      )

  /**
   * Return an array of connections.
   */
  getConnectionsByNodeId =
    (connections, nodeId) =>
      R.filter(
        R.either(
          R.propEq('parentNodeId', nodeId),
          R.propEq('childNodeId', nodeId),
        ),
        R.values(connections),
      )

  doesConnectionWithIdExist =
    ({ connections, connectionId }) =>
      connectionId in connections;

  getConnectionById =
    ({
      connections,
      connectionId,
    }) => {
      if (!this.doesConnectionWithIdExist({
        connections,
        connectionId,
      })) {
        debugger;
        throw 'Error!';
      }
      // else
      return connections[connectionId];
    };

  getAllChainsHelper =
    ({
      // nodes,
      connections,
      nodeIdToExamine,
      parentIdChain, // parents chain of nodeToExamine.
      chainsAccum, // chains that have been completely examined until bottom.
    }) => {
      parentIdChain.push(nodeIdToExamine);
      const childrenIds =
        this.getChildrenIdsOfNodeWithId(connections, nodeIdToExamine);
      if (childrenIds.length === 0) {
        // chain has reached the bottom.
        chainsAccum.push(parentIdChain);
        return;
      }
      childrenIds.forEach((nodeId) => {
        this.getAllChainsHelper({
          // nodes,
          connections,
          nodeIdToExamine:
            nodeId,
          parentIdChain:
            _.cloneDeep(parentIdChain),
          chainsAccum,
        });
      });
    }

  /**
   * Returns an array.
   */
  getConnectableInputsOfNodeType =
    nodeType =>
      nodeTypeDefinitions[nodeType].connectableInputs
  /**
   * Returns an array.
   */
  getConnectableInputsOfNode =
    node =>
      this.getConnectableInputsOfNodeType(node.nodeType)

  /**
   * Checks if the node type produces any output.
   */
  getOutputOfNodeType =
    nodeType =>
      nodeTypeDefinitions[nodeType].output
  getOutputOfNode =
    node =>
      this.getOutputOfNodeType(node.nodeType)

  /**
   * 
   */
  getKnobableInputsOfNodeType =
    nodeType =>
      R.defaultTo([], nodeTypeDefinitions[nodeType].knobableInputs)
  getKnobableInputsOfNode =
    node =>
      this.getKnobableInputsOfNodeType(node.nodeType)

  /**
   * 
   */
  getTriggerableInputsOfNodeType =
    nodeType =>
      R.defaultTo([], nodeTypeDefinitions[nodeType].triggers)
  getTriggerableInputsOfNode =
    node =>
      this.getTriggerableInputsOfNodeType(node.nodeType)

  /**
   * Checks if default state but
   * ignores 'router-state' and 'history'.
   */
  isDefaultState =
    state =>
      R.equals(state.nodeManagement, initialState.nodeManagement)
}

export const stateQueries = new StateQueries();
// window.stateQueries = stateQueries;
