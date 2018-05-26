import { filter, map, compose, values, identity, propEq, pick, path,
  useWith, props, flip, prop, either, defaultTo, equals } from 'ramda';
import { createSelector } from 'reselect';
import { initialState } from '../InitialState';
import { nodeTypeDefinitions } from '../../NodeTypeDefinitions'; // todo. cheating. I dont take it from state.
import { getAllConnections } from 'redux/StateQueries/new-state-queries/connection-queries';

class StateQueries {
  /**
   * @param ids An array of ids.
   */
  getKnobsByIds = (state, ids) =>
    pick(ids, state.nodeManagement.knobs)

  getAllConnectionValues =
    createSelector(
      [getAllConnections],
      values,
    )

  getAllGroups =
    state =>
      state.nodeManagement.groups

  getAllGroupValues =
    createSelector(
      [this.getAllGroups],
      values,
    )

  getAllUiComponents =
    state =>
      state.ui.components;

  /**
   * Returns an array of triggered trigger id:s
   */
  getAllTriggeredTriggerIds =
    path(['nodeManagement', 'triggeredTriggers'])

  getAllTriggers =
    path(['nodeManagement', 'triggers'])

  getAllTriggeredTriggers =
    createSelector(
      [this.getAllTriggeredTriggerIds, this.getAllTriggers],
      useWith(
        props,
        [map(toString), identity],
      ),
    )

  /**
   * 
   */
  /* nodeHasInputs =
    pathSatisfies(gt(__, 0), ['inputs', 'length']); */
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
    props(['inputNode', 'outputNode', 'otherNodes'])

  /**
   * node not nodeId!
   */
  getNodeInReadableFormat =
    (node) => {
      if (node === undefined || node === null) {
        debugger;
      }
      if (node.name !== '' && node.name !== undefined && node.name !== null) {
        return `id${node.id}: ${node.name}`;
      }
      if (node.nodeType === 'Oscillator') {
        return `id${node.id}: ${node.oscillatorType}_${node.frequency}Hz`;
      } else if (node.nodeType === 'Gain') {
        return `id${node.id}: ${node.nodeType}_${node.gain}`;
      }
      return `id${node.id}: ${node.nodeType}`;
    }

  /**
   * nodeId not node!
   * 
   * todo. wtf is this function?!
   * 
   * @param nodes
   * @param nodeId
   */
  getNodeByIdInReadableFormat =
    compose(
      this.getNodeInReadableFormat,
      flip(prop)
    )

  doesNodeWithIdExist = ({ nodes, nodeId }) => nodeId in nodes;

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
   * Return an array of connections.
   */
  getConnectionsByNodeId =
    (connections, nodeId) =>
      filter(
        either(
          propEq('parentNodeId', nodeId),
          propEq('childNodeId', nodeId),
        ),
        values(connections),
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
        throw 'Error! In stateQueries.js.';
      }
      // else
      return connections[connectionId];
    };

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
      defaultTo([], nodeTypeDefinitions[nodeType].knobableInputs)
  getKnobableInputsOfNode =
    node =>
      this.getKnobableInputsOfNodeType(node.nodeType)

  /**
   * 
   */
  getTriggerableInputsOfNodeType =
    nodeType =>
      defaultTo([], nodeTypeDefinitions[nodeType].triggers)
  getTriggerableInputsOfNode =
    node =>
      this.getTriggerableInputsOfNodeType(node.nodeType)

  /**
   * Checks if default state but
   * ignores 'router-state' and 'history'.
   */
  isDefaultState = state => equals(state.nodeManagement, initialState.nodeManagement)
}

export const stateQueries = new StateQueries();
// window.stateQueries = stateQueries;
