import { safeDisconnect } from '../utils';
import { audioContext } from '../audioContext';

/**
 * 
 * @param params Object with param-value-pairs
 */
const createDefaults = (params) => {
  const entries = Object.entries(params);
  const defaults = entries.reduce((accum, [key, val]) => ({
    ...accum,
    [key]: new ConstantSourceNode(audioContext, { offset: val })
  }), {});
  // start all defaults.
  Object.values(defaults).forEach(n => n.start());
  return defaults;
};

/**
 * 
 * @param params Array of param-names
 */
const createBufferNodes = (params) =>
  params.reduce((accum, param) => ({
    ...accum,
    [param]: new GainNode(audioContext, { gain: 1 })
  }), {});

/**
 * Connects the defaultNodes to the bufferNodes.
 * 
 * @param {Object} defaults
 * @param {Object} params
 */
const connectDefaults = (defaults, params) => {
  const entries = Object.entries(defaults);
  entries.forEach(([key, val]) => {
    val.connect(params[key]);
  });
};

// ------------------------------
// AudioWorkletBase
// ------------------------------

export class AudioWorkletBase {
  constructor({
    id,
    defaultParams,
    bufferNodeNames
  }) {
    this.id = id;
    /**
     * These default values are disconnected when another node connects
     * to the param.
     */
    this.defaults = createDefaults(defaultParams);

    /**
     * These nodes exist so that there is always something to connect to
     * even if the AudioWorkletProcessor has not loaded yet.
     * So, in other words these nods are ALWAYS connected.
     */
    this.params = createBufferNodes(bufferNodeNames);

    /**
     * These should be disconnected when something else connects.
     */
    connectDefaults(this.defaults, this.params);
  }

/**
 * 
 */
connectBufferNodesToWorklet = () => {
  const { worklet } = this;
  const entries = Object.entries(this.params);
  const params = worklet.parameters;
  entries.forEach(([key, bufferNode]) => {
    switch (key) {
      case 'input':
        bufferNode.connect(worklet);
        break;
      case 'output':
        worklet.connect(bufferNode);
        break;
      default:
        bufferNode.connect(params.get(key));
    }
  });
};

  willConnectToMe = (whichInput) => {
    // Disconnect the default value.
    const def = this.defaults[whichInput];
    if (def) {
      def.disconnect();
    }
  }

  willDisconnectFromMe = (whichInput) => {
    // Reconnect the default value.
    const def = this.defaults[whichInput];
    if (def) {
      def.connect(this.params[whichInput]);
    }
  }

  destruct = () => {
    this.worklet.port.postMessage('destruct');
    safeDisconnect(this.worklet);

    Object.values(this.defaults).forEach(n => {
      n.stop();
      safeDisconnect(n);
    });

    Object.values(this.params).forEach(n => {
      safeDisconnect(n);
    });
  }
}
