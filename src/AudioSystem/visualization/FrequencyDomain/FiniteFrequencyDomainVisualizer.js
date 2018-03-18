import * as R from 'ramda';

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

export class FiniteFrequencyDomainVisualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (R.isNil(this.canvas)) {
      console.log('Error: canvas does not exist.');
      debugger;
      alert('Error');
    }
    this.canvasCtx = this.canvas.getContext('2d');
  }

  /**
   * The y-value is adjusted according to the
   * height of the canvas.
   */
  relativeToAbsolute =
    rel =>
      (-rel * (this.canvas.height / 2)) + (this.canvas.height / 2);

  drawGuideLines =
    () => {
      for (let x = 0; x < this.canvas.width; x++) {
        this.drawGreenPixel(x, this.relativeToAbsolute(0));
        this.drawGreenPixel(x, this.relativeToAbsolute(0.5));
        this.drawGreenPixel(x, this.relativeToAbsolute(-0.5));
      }
    }

  drawGreenPixel =
    (x, y) => {
      // let _x = Math.floor(x); // todo unoptimized!!!!
      const _y = Math.floor(y);
      const index = (x + (_y * this.canvas.width)) * 4;
      this.canvasData.data[index + 0] = 0;
      this.canvasData.data[index + 1] = 70;
      this.canvasData.data[index + 2] = 0;
      this.canvasData.data[index + 3] = 255;
    }

  drawRedPixel =
    (x, y) => {
      const _x = Math.floor(x); // todo unoptimized!!!!
      const _y = Math.floor(y);
      const index = (_x + (_y * this.canvas.width)) * 4;
      this.canvasData.data[index + 0] = 255;
      this.canvasData.data[index + 1] = 0;
      this.canvasData.data[index + 2] = 0;
      this.canvasData.data[index + 3] = 255;
    }

  draw =
    (float32Array) => {
      this.canvasCtx.fillStyle = 'rgba(0, 0, 0, 255)';
      this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvasData = this.canvasCtx.getImageData(0, 0, this.canvas.width, this.canvas.height);

      this.drawGuideLines();

      const indexesPerPixel = float32Array.length / this.canvas.width;
      // let pixelCounter = 0;
      for (let x = 0; x < this.canvas.width; x++) {
        // canvasCtx.fillStyle = 'rgba(50, 255, 50, 255)';
        // canvasCtx.fillRect(x, canvas.height - barHeight, 1, 1);
        // x += barWidth;
        const i = Math.round(indexesPerPixel * x);
        const value = float32Array[i];
        let height = ((value + 43) * 0.0350);
        // height = audioUtility.gainToLoudness(height);
        if (height > 1) {
          height = 1;
        }
        const y = this.relativeToAbsolute(height);
        for (let j = this.canvas.height; j >= y; j--) {
          this.drawRedPixel(x, j);
        }
      }
      this.canvasCtx.putImageData(this.canvasData, 0, 0);
    }
}
