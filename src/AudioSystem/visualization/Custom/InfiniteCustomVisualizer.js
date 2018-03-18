import { FiniteCustomVisualizer } from './FiniteCustomVisualizer';

/**
 * Vizualizer class
 *
 * I want to have a Vizualizer class that can
 * visualize an array of floats with values 0 to 1.
 *
 * Thus I can for example visualize my ADSR node's
 * data.
 *
 * I want one to visualize a finite sound,
 * and one for continuous visualization of
 * (infinite) sounds.
 */

export class InfiniteCustomVisualizer {
  init(analyserNode, timeDomainCanvasId) {
    if (!analyserNode) {
      debugger;
      alert('Error! analyserNode is undefined or null.');
    }
    this.timeDomainCanvasId = timeDomainCanvasId;
    /* this.FiniteCustomVisualizer =
      new FiniteCustomVisualizer(
        timeDomainCanvasId,
        parseFloat(this.maxValue),
        parseFloat(this.minValue),
      ); */

    this.destructed = false;

    this.analyserNode = analyserNode;
  }

  updateSettings =
    ({
      millisecondsBetweenUpdates, maxValue, minValue
    }) => {
      this.maxValue = maxValue;
      this.minValue = minValue;

      this.FiniteCustomVisualizer =
        new FiniteCustomVisualizer(
          this.timeDomainCanvasId,
          parseFloat(this.maxValue),
          parseFloat(this.minValue),
        );

      // stop interval if it is not undefined
      if (this.interval !== undefined) {
        clearInterval(this.interval);
      }
      // this.analyserNode.fftSize = 2 ** bitsToRecord;
      // this.timeDomainDataArray = new Float32Array(this.analyserNode.fftSize);

      // start a new interval with correct
      this.interval = setInterval(this.draw, millisecondsBetweenUpdates);
    }

  draw = () => {
    // if (this.destructed === false) {
    // this.analyserNode.getFloatTimeDomainData(this.timeDomainDataArray);
    this.analyserNode.requestDataPromise()
      .then(this.FiniteCustomVisualizer.draw);
    // }
  }

  destructor = () => {
    this.destructed = true;
    clearInterval(this.interval);
  }
}
