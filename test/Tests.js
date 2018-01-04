import { describe, it } from 'mocha';
import { assert } from 'chai';
import { nodeTypeDefinitions } from '../src/NodeTypeDefinitions';
import {
  stateQueries,
  memoizedStateQueries,
} from '../src/redux/StateQueries';

const state1 = {
  nodeManagement: {
    nodes: {
      1: {
        id: 1,
        nodeType: 'Speakers',
        name: 'one',
      },
      2: {
        id: 2,
        nodeType: 'Gain',
        name: 'two',
      },
      3: {
        id: 3,
        nodeType: 'LowResolutionSine',
        name: 'three',
      },
      4: {
        id: 4,
        nodeType: 'LowResolutionSine',
        name: 'four',
      },
      5: {
        id: 5,
        nodeType: 'LowResolutionSine',
        name: 'five',
      },
    },
    connections: {
      1: {
        parentNodeId: 1,
        childNodeId: 2,
      },
      2: {
        parentNodeId: 3,
        childNodeId: 4,
      },
    },
    groups: {
      1: {
        id: 1,
        name: 'group1',
        inputNode: 1,
        outputNode: 2,
        otherNodes: [3, 4],
      },
    },
    nodeTypeDefinitions,
  },
};

describe('stateQueries', function() { // eslint-disable-line
  it('getAllNodes.', function() { // eslint-disable-line
    const returnValue = stateQueries.getAllNodes(state1);
    assert.strictEqual(
      returnValue, 
      state1.nodeManagement.nodes,
    );
  });

  it('getAllNodesInReadableFormat.', function() { // eslint-disable-line
    const returnValue = memoizedStateQueries.getAllNodesInReadableFormat(state1);
    assert.deepEqual(
      returnValue, 
      {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
      },
    );
  });

  it('getNodesThatHaveOutputs.', function() { // eslint-disable-line
    const returnValue = memoizedStateQueries.getNodesThatHaveOutputs(state1);
    // console.log(JSON.stringify(returnValue, null, 2));
    assert.deepEqual(
      returnValue, 
      {
        2: state1.nodeManagement.nodes[2],
        3: state1.nodeManagement.nodes[3],
        4: state1.nodeManagement.nodes[4],
        5: state1.nodeManagement.nodes[5],
      },
    );
  });

  it('nodeHasInputs.', function() { // eslint-disable-line
    const returnValue = stateQueries.nodeHasConnectableInputs(state1.nodeManagement.nodes[1]);
    assert.equal(
      returnValue, 
      true,
    );
  });

  it('getNodesThatHaveInputs.', function() { // eslint-disable-line
    const returnValue = memoizedStateQueries.getNodesThatHaveConnectableInputs(state1);
    assert.deepEqual(
      returnValue, 
      {
        1: state1.nodeManagement.nodes[1],
        2: state1.nodeManagement.nodes[2],
      },
    );
  });

  it('getNodesByType.', function() { // eslint-disable-line
    const returnValue = memoizedStateQueries.getNodesByType(state1, 'Gain');
    assert.deepEqual(
      returnValue, 
      {
        2: state1.nodeManagement.nodes[2],
      },
    );
  });

  it('getAllNodeIdsInGroup.', function() { // eslint-disable-line
    const returnValue = stateQueries.getAllNodeIdsInGroup(state1.nodeManagement.groups[1]);
    assert.deepEqual(
      returnValue, 
      [1, 2, [3, 4]],
    );
  });

  it('getAllGroupedNodes.', function() { // eslint-disable-line
    const returnValue = memoizedStateQueries.getAllGroupedNodes(state1);
    assert.deepEqual(
      returnValue, 
      [1, 2, 3, 4],
    );
  });

  it('getAllNodesThatAreChildren.', function() { // eslint-disable-line
    const returnValue = memoizedStateQueries.getAllNodesThatAreChildren(state1);
    assert.deepEqual(
      returnValue, 
      [2, 4],
    );
  });

  it('getAllNodesWithoutParents.', function() { // eslint-disable-line
    const returnValue = memoizedStateQueries.getAllNodesWithoutParents(state1);
    assert.deepEqual(
      returnValue, 
      [1, 3, 5],
    );
  });
});

