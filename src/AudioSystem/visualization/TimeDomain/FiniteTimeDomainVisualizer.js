import * as R from 'ramda';
import {
  mathHelpers,
} from 'helpers';

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

export class FiniteTimeDomainVisualizer {
  constructor(canvasId, maxValue, minValue) {
    this.maxValue = maxValue;
    this.minValue = minValue;
    this.canvas = document.getElementById(canvasId);
    if (R.isNil(this.canvas)) {
      console.log('Error: canvas does not exist.');
      debugger;
      alert('Error: canvas does not exist.');
    }
    this.canvasCtx = this.canvas.getContext('2d');
  }

  toRightRange =
    value =>
      mathHelpers.convertRange([this.minValue, this.maxValue], [-1, 1], value)

  /**
   * The y-value is adjusted according to the
   * height of the canvas.
   */
  relativeToAbsolute =
    rel =>
      (-rel * (this.canvas.height / 2)) + (this.canvas.height / 2);

  drawGreenPixel =
    (x, y) => {
      // let _x = Math.floor(x); // todo unoptimized!!!!
      const _y = Math.floor(y);
      const index = (x + (_y * this.canvas.width)) * 4;
      this.canvasData.data[index + 0] = 50;
      this.canvasData.data[index + 1] = 255;
      this.canvasData.data[index + 2] = 50;
      this.canvasData.data[index + 3] = 255;
    }

  drawRedPixel =
    (x, y) => {
      // let _x = Math.floor(x); // todo unoptimized!!!!
      const _y = Math.floor(y);
      const index = (x + (_y * this.canvas.width)) * 4;
      this.canvasData.data[index + 0] = 110;
      this.canvasData.data[index + 1] = 0;
      this.canvasData.data[index + 2] = 0;
      this.canvasData.data[index + 3] = 255;
    }

  drawGuideLines =
    () => {
      for (let x = 0; x < this.canvas.width; x++) {
        this.drawRedPixel(x, this.relativeToAbsolute(0));
        this.drawRedPixel(x, this.relativeToAbsolute(0.5));
        this.drawRedPixel(x, this.relativeToAbsolute(-0.5));
      }
    }

  /**
   * Tried to improve the function above.
   * 3.54 milliseconds.
   * @param {*} float32Array
   */
  draw =
    (float32Array) => {
      this.canvasCtx.fillStyle = 'black';
      this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvasData = this.canvasCtx.getImageData(0, 0, this.canvas.width, this.canvas.height);

      this.drawGuideLines();

      const indexesPerPixel = float32Array.length / this.canvas.width;
      
      let x = 0;
      for (; x < this.canvas.width; x++) {
        const indexInArray = Math.round(indexesPerPixel * x);
        const v = this.toRightRange(float32Array[indexInArray]);
        const y = this.relativeToAbsolute(v);
        this.drawGreenPixel(x, y);
      }
      const indexInArray = Math.round(indexesPerPixel * x);
      const v = this.toRightRange(float32Array[indexInArray]);
      const y = this.relativeToAbsolute(v);
      this.drawGreenPixel(x, y);

      this.canvasCtx.putImageData(this.canvasData, 0, 0);
    }
}
