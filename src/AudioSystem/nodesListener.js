import {
  stateQueries,
} from 'redux/StateQueries';
import _ from 'lodash';
import * as R from 'ramda';
import { nodes } from './nodes';

class NodesListener {
  /**
   * The previous state is needed to see if the new state has changed.
   */
  previousNodes = {};

  /**
   * This method subscribes to changes in the store.
   */
  onActionWasDispatched =
    (newState) => {
      const newNodes =
        stateQueries.getAllNodes(newState);
      /**
       * Check if the state is EXATLY the same as before.
       */
      if (newNodes !== this.previousNodes) {
        this.onNodesChanged(newNodes);
        this.previousNodes = newNodes;
      }
    }

  onNodesChanged =
    (newNodes) => {
      console.log('onNodesChanged {');
      // nodes can have been removed, changed or added.
      const prevNodes = this.previousNodes; // todo refactor.
      // Check which ones were removed
      const idsForNodesThatWereDeleted =
        _.difference(
          Object.keys(prevNodes),
          Object.keys(newNodes),
        );
      console.log(`\tidsForNodesThatWereDeleted: ${idsForNodesThatWereDeleted}`);
      nodes.deleteNodes({
        idsForNodesThatWereDeleted,
      });

      // console.log(`\tidsForNodesThatWereAdded: ${idsForNodesThatWereAdded}`);
      const nodesThatWereAdded =
        R.compose(
          R.values,
          R.pick(R.__, newNodes),
          R.difference,
        )(R.keys(newNodes), R.keys(prevNodes));
      
      nodes.createNodes({ nodesThatWereAdded });

      // Check which ones were changed
      //    i.e. the keys that exist in both but have different values.
      const isInPrevNodesButIsDifferent =
        (node, prevNode) =>
          prevNode !== undefined && prevNode !== node;

      /* const nodesThatWereChanged =
        Object.values(newNodes).filter(node => isInPrevNodesButIsDifferent(node)); */
      const nodesThatWereChanged =
        Object.values(newNodes).reduce((accum, node) => {
          const prevNode = prevNodes[node.id];
          if (isInPrevNodesButIsDifferent(node, prevNode)) {
            accum.push({
              node,
              prevNode,
            });
          }
          return accum;
        }, []);
      console.log(`\tnodesThatWereChanged: ${nodesThatWereChanged}`);
      nodes.changeNodes({ nodesThatWereChanged });

      console.log('}');
    }
}

export const nodesListener = new NodesListener();
