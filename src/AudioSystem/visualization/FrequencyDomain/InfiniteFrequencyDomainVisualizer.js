// import Global from './globals';
import {
  FiniteFrequencyDomainVisualizer,
} from './FiniteFrequencyDomainVisualizer';

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

export class InfiniteFrequencyDomainVisualizer {
  init(analyserNode, frequencyDomainCanvasId) {
    this.frequencyDomainCanvasId = frequencyDomainCanvasId;
    this.analyserNode = analyserNode;
    this.destructed = false;
  }

  updateSettings =
    ({
      millisecondsBetweenUpdates,
      // maxValue,
      // minValue,
      // bitsToRecord,
      fftSize,
      maxDecibels,
      minDecibels,
      smoothingTimeConstant,
    }) => {
      // this.maxValue = maxValue;
      // this.minValue = minValue;

      this.finiteFrequencyDomainVisualizer =
        new FiniteFrequencyDomainVisualizer( // eslint-disable-line
          this.frequencyDomainCanvasId,
          // parseFloat(this.maxValue),
          // parseFloat(this.minValue),
        ); // eslint-disable-line

      // stop interval if it is not undefined
      if (this.interval !== undefined) {
        clearInterval(this.interval);
      }

      this.analyserNode.fftSize = 2 ** fftSize;
      this.analyserNode.maxDecibels = maxDecibels;
      this.analyserNode.minDecibels = minDecibels;
      this.analyserNode.smoothingTimeConstant = smoothingTimeConstant;

      this.frequencyDomainDataArray =
        new Float32Array(this.analyserNode.frequencyBinCount - 1);

      // start a new interval with correct
      this.interval = setInterval(this.draw, millisecondsBetweenUpdates);
    }

  draw =
    () => {
      this.analyserNode.getFloatFrequencyData(this.frequencyDomainDataArray);

      this.finiteFrequencyDomainVisualizer
        .draw(this.frequencyDomainDataArray);
    }

  destructor =
    () => {
      this.destructed = true;
      clearInterval(this.interval);
    }
}
