import { stateQueries } from 'redux/StateQueries';
import { triggerHandledAction } from 'redux/modules/trigger';
import { nodes } from './nodes';

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
        triggerHandledAction(trig.id);
      });
    }
}

export const triggeredTriggersListener = new TriggeredTriggersListener();
