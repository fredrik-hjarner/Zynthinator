import React from 'react';
import * as R from 'ramda';
// import _ from 'lodash';
import {
  nodes,
  InfiniteFrequencyDomainVisualizer,
  calculateFrequencyInNthBin, // eslint-disable-line
  // audioContext,
} from 'AudioSystem';
import {
  uiFdAnalyserChangeParamsAction,
} from 'redux/Actions';
import { SimpleWindowRedux } from '../../SimpleWindow';
import {
  FrequencyDomainVisualizerSettingsDumb,
} from './FrequencyDomainVisualizerSettingsDumb';
import {
  CanvasContainer,
} from './CanvasContainer';

export class FrequencyDomainVisualizerControlled extends React.Component {
  componentDidMount() {
    /*
    const bins =
      this.props.analyserNode.webAudioNode.webAudioNode.fftSize / 2;
    const maxFrequency =
      calculateFrequencyInNthBin(bins, this.props.analyserNode.webAudioNode.webAudioNode.fftSize);
    */

    /**
     * dissect props.uiComponent
     */
    /**
     * Get hold of the webAudioNode.
     */
    const webAudioNodeId = this.props.uiComponent.nodeId;
    const webAudioNode = nodes.nodes[webAudioNodeId];

    if (R.isNil(webAudioNode)) {
      alert('Error. R.isNil(webAudioNode)');
      debugger;
    }
    this.visualizer = new InfiniteFrequencyDomainVisualizer();
    this.visualizer.init(
      webAudioNode.webAudioNode,
      this.frequencyDomainCanvasId, // todo. should not have a static Id that makes it IMPOSSIBLE to instantiate several FrequencyDomainVisualizer:s.
    );

    this.updateSettings(this.props.uiComponent);
  }

  componentWillReceiveProps =
    nextProps =>
      this.updateSettings(nextProps.uiComponent)

  componentWillUnmount =
    () => {
      this.visualizer.destructor();
    }

  updateSettings =
    (uiComponent) => {
      /**
       * Update the visualiser settings.
       */
      const settings =
        R.pick(
          [
            'millisecondsBetweenUpdates',
            // 'maxValue',
            // 'minValue',
            'fftSize',
            'maxDecibels',
            'minDecibels',
            'smoothingTimeConstant',
          ],
          uiComponent,
        );
      this.visualizer
        .updateSettings(settings);
    }

  frequencyDomainCanvasId =
    `frequencyDomainCanvas${this.props.uiComponent.id}`;

  handlers = {
    handleChange:
      (e, semantic) => {
        let _name = e.target.name;
        let _value = e.target.value;
        if (_name === undefined) {
          _name = semantic.name;
          _value = semantic.value;
        }
        uiFdAnalyserChangeParamsAction(this.props.uiComponent.id, _name, _value);
      },
  }

  render =
    () => { // eslint-disable-line
      /* const samplesPerSecond =
        audioContext.sampleRate; */

      const settingsProps =
        R.pick(
          [
            'millisecondsBetweenUpdates',
            // 'maxValue',
            // 'minValue',
            'canvasWidth',
            'canvasHeight',
            'fftSize',
            'maxDecibels',
            'minDecibels',
            'smoothingTimeConstant',
          ],
          this.props.uiComponent,
        );

      /* const floatToReadable =
        (val) => {
          if (val < 1) {
            return _.round(val, 1);
          } else if (val < 10) {
            return _.round(val, 0);
          } else if (val < 100) {
            return _.round(val, -1);
          }
          return _.round(val, -2);
        }; */

      /* settingsProps.bitsToRecordOption =
        R.map(
          val => ({
            key: `${val}`,
            value: `${val}`,
            text: `${floatToReadable((1000 * (2 ** val) / samplesPerSecond))} ms`,
          }),
          R.range(5, 15 + 1),
        ); */

      return (
        <SimpleWindowRedux title={`id${this.props.uiComponent.nodeId}`}>
          <CanvasContainer
            id={this.frequencyDomainCanvasId}
            width={this.props.uiComponent.canvasWidth}
            height={this.props.uiComponent.canvasHeight}
          />
          <FrequencyDomainVisualizerSettingsDumb
            {...this.handlers}
            {...settingsProps}
          />
        </SimpleWindowRedux>
      );
    }
}
