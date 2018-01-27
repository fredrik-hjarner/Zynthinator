import {
  stateQueries,
} from 'redux/StateQueries';
import * as Actions from 'redux/Actions';
import {
  nodes,
} from './nodes';

class TriggeredTriggersListener {
  onActionWasDispatched =
    (state) => {
      const triggeredTriggers =
        stateQueries.getAllTriggeredTriggers(state);

      triggeredTriggers.forEach((trig) => {
        /**
         * trigger the action on correct the
         * corresponding audio node.
         */
        const node =
          nodes.nodes[trig.connectedToWhichNode];
        node[trig.connectedToWhichParam]();
        Actions.triggerHandledAction(trig.id);
      });
    }
}

export const triggeredTriggersListener = new TriggeredTriggersListener();
