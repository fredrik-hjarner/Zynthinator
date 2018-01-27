import {
  stateQueries,
} from 'redux';
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
        alert('Error!');
      }

      const {
        willConnectToMe,
      } = childNode;
      
      if (willConnectToMe === undefined) {
        debugger;
        alert('Error!');
      }
      willConnectToMe(childNodeInput);

      parentNode.output.connect(childNode[childNodeInput]);
      console.log(`parentNode.output.connect(childNode[${childNodeInput}]);`);
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
      if (
        parentNode !== undefined &&
        childNode !== undefined
      ) { // i.e. the node has not already been deleted.
        childNode.willDisconnectFromMe(childNodeInput);

        parentNode.output.disconnect(childNode[childNodeInput]);
        console.log(`parentNode.output.disconnect(childNode[${childNodeInput}]);`);
      }
    });
  }
}

export const connections = new Connections();
