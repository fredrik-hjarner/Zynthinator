import {
  stateQueries,
} from 'redux/StateQueries';
import { nodes } from './nodes';

class Connections {
  createConnections = ({ connectionsThatWereAdded }) => {
    // alert(JSON.stringify(connectionsThatWereAdded, null, 2));
    // go through the array and create all the nodes.
    connectionsThatWereAdded.forEach((connection) => {
      const {
        parentNodeId,
        childNodeId,
        childNodeInput,
      } = connection;
      const parentNode = nodes.nodes[parentNodeId];
      const childNode = nodes.nodes[childNodeId];

      if (childNode === undefined) {
        debugger;
        alert('Error! childNode === undefined');
      }

      if (parentNode === undefined) {
        debugger;
        alert('Error! parentNode === undefined');
      }

      const {
        willConnectToMe,
      } = childNode;
      
      if (willConnectToMe === undefined) {
        debugger;
        alert('Error! willConnectToMe === undefined');
      }
      willConnectToMe(childNodeInput);

      const childInput = childNode[childNodeInput];

      try {
        parentNode.output.connect(childInput);
      } catch (ex) {
        console.log('In connections.js:');
        console.log('parentNode: ');
        console.dir(parentNode);
        console.log('');
        console.log('childNode: ');
        console.dir(childNode);
        console.log('');
        console.log('childNodeInput: ');
        console.dir(childNodeInput);
        console.log('');
        console.log('childNode[childNodeInput]: ');
        console.dir(childNode[childNodeInput]);
        console.log('');
        debugger;
        throw ex;
      }
    });
  }

  deleteConnections = ({ previousConnections, idsForConnectionsThatWereDeleted }) => { // eslint-disable-line
    idsForConnectionsThatWereDeleted.forEach((connectionId) => { // eslint-disable-line
      const connection = stateQueries.getConnectionById({
        connections:
          previousConnections,
        connectionId,
      });
      const {
        parentNodeId,
        childNodeId,
        childNodeInput,
      } = connection;
      const parentNode = nodes.nodes[parentNodeId];
      const childNode = nodes.nodes[childNodeId];
      if (parentNode !== undefined
      && childNode !== undefined) { // i.e. the node has not already been deleted.
        parentNode.output.disconnect(childNode[childNodeInput]);
      }
      if (childNode !== undefined) { // i.e. the node has not already been deleted.
        childNode.willDisconnectFromMe(childNodeInput);
      }
    });
  }
}

export const connections = new Connections();
