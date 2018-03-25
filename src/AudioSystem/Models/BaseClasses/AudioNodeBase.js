/**
 * Constinue to work with this node.
 * This node is supposed to be a Base node,
 * that keeps track of default values and
 * willConnectToMe/willDisconnectFromMe.
 */

// import { safeDisconnect } from '../utils';

export class AudioNodeBase {
  constructor({ id, defaultParams }) {
    this.id = id;
    /**
     * These default values are disconnected when another node connects
     * to the param.
     */
    this.defaults = defaultParams;

    /**
     * These should be disconnected when something else connects.
     */
    // connectDefaults(this.defaults, this.params);
  }

  willConnectToMe = (whichInput) => {
    // Set the param to a pre-default value.
    this.params[whichInput].value = 0; // todo zero might not always be the optimal default value.
  }

  willDisconnectFromMe = (whichInput) => {
    /**
     * Reconnect the default value from redux
     * state for this specific node instance.
     */
    const def = this.defaults[whichInput];
    this.params[whichInput] = def;
  }

  /**
   * Sets default values on the nodes.
   * 
   * @param {Object} defaults
   * @param {Object} params
   */
  setParameterDefaults = (defaults, params) => {
    const entries = Object.entries(defaults);
    entries.forEach(([key, val]) => {
      params[key].value = val; // eslint-disable-line
    });
  }

  destruct = () => {
    // this.worklet.port.postMessage('destruct');
    // safeDisconnect(this.worklet);

    // Object.values(this.defaults).forEach(n => {
    //   n.stop();
    //   safeDisconnect(n);
    //   n = null; // eslint-disable-line
    // });
    // this.defaults = null;

    // Object.values(this.params).forEach(n => {
    //   safeDisconnect(n);
    // });
  }
}
