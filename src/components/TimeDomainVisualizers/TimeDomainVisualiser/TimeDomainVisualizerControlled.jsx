import React from 'react';
import * as R from 'ramda';
import _ from 'lodash';
import {
  uiTdAnalyserChangeParamsAction,
} from 'redux/Actions';
import {
  nodes,
  InfiniteTimeDomainVisualizer,
  audioContext,
} from '../../../AudioSystem';
import { SimpleWindowRedux } from '../../SimpleWindow';
import {
  TimeDomainVisualizerSettingsDumb,
} from './TimeDomainVisualizerSettingsDumb';
import {
  CanvasContainer,
} from './CanvasContainer';

export class TimeDomainVisualizerControlled extends React.Component {
  componentDidMount() {
    /**
     * dissect props.uiComponent
     */
    /**
     * Get hold of the webAudioNode.
     */
    const webAudioNodeId = this.props.uiComponent.nodeId;
    if (!webAudioNodeId || webAudioNodeId === Infinity || webAudioNodeId === -Infinity) {
      debugger;
      alert('Error!');
    }

    const webAudioNode = nodes.nodes[webAudioNodeId];

    if (R.isNil(webAudioNode)) {
      alert('Error. R.isNil(webAudioNode)');
      debugger;
    }
    this.visualizer = new InfiniteTimeDomainVisualizer();
    this.visualizer.init(
      webAudioNode.webAudioNode,
      this.timeDomainCanvasId, // todo. should not have a static Id that makes it IMPOSSIBLE to instantiate several TimeDomainVisualizer:s.
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
          ['millisecondsBetweenUpdates', 'maxValue', 'minValue', 'bitsToRecord'],
          uiComponent,
        );
      this.visualizer
        .updateSettings(settings);
    }

  timeDomainCanvasId =
    `timeDomainCanvas${this.props.uiComponent.id}`;

  handlers = {
    handleChange:
      (e, semantic) => {
        let _name = e.target.name;
        let _value = e.target.value;
        if (_name === undefined) {
          _name = semantic.name;
          _value = semantic.value;
        }
        uiTdAnalyserChangeParamsAction(this.props.uiComponent.id, _name, _value);
      },
  }

  render =
    () => { // eslint-disable-line
      const samplesPerSecond =
        audioContext.sampleRate;

      const settingsProps =
        R.pick(
          [
            'millisecondsBetweenUpdates',
            'maxValue',
            'minValue',
            'canvasWidth',
            'canvasHeight',
            'bitsToRecord',
          ],
          this.props.uiComponent,
        );

      const floatToReadable =
        (val) => {
          if (val < 1) {
            return _.round(val, 1);
          } else if (val < 10) {
            return _.round(val, 0);
          } else if (val < 100) {
            return _.round(val, -1);
          }
          return _.round(val, -2);
        };

      settingsProps.bitsToRecordOption =
        R.map(
          val => ({
            key: `${val}`,
            value: `${val}`,
            text: `${floatToReadable((1000 * (2 ** val) / samplesPerSecond))} ms`,
          }),
          R.range(5, 15 + 1),
        );

      return (
        <SimpleWindowRedux title={`id${this.props.uiComponent.nodeId}`}>
          <CanvasContainer
            id={this.timeDomainCanvasId}
            width={this.props.uiComponent.canvasWidth}
            height={this.props.uiComponent.canvasHeight}
          />
          <TimeDomainVisualizerSettingsDumb
            {...this.handlers}
            {...settingsProps}
          />
        </SimpleWindowRedux>
      );
    }
}
