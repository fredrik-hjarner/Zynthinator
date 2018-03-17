/**
 * Listens to rising edge and falling edge.
 * Emits 'rising-edge' on rising edge
 * Emits 'falling-edge' on falling edge
 */

// ----------------------------
// AudioWorkletProcessor
// ----------------------------

class Processor extends AudioWorkletProcessor { // eslint-disable-line
  constructor() {
    super();
    this.lastValueWasHigh = false; // start up looking for rising edges.
    this.firstTime = true;
  }

  process([[input]]) {
    // Look for rising and falling edges.
    input.forEach(value => {
      if ((this.firstTime || this.lastValueWasHigh) && value < 0.5) {         // falling edge
        this.port.postMessage('falling-edge');
        this.lastValueWasHigh = false;
      } else if ((this.firstTime || !this.lastValueWasHigh) && value >= 0.5) { // rising edge
        this.port.postMessage('rising-edge');
        this.lastValueWasHigh = true;
      }
    });
    this.firstTime = false;

    return true; // keep processor alive
  }
}

registerProcessor('edge-listener', Processor); // eslint-disable-line
