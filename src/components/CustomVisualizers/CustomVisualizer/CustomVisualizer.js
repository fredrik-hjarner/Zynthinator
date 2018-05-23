import React from 'react';
import * as R from 'ramda';
import _ from 'lodash';
import { uiTdAnalyserChangeParamsAction } from 'redux/modules/ui';
import {
  nodes,
  InfiniteCustomVisualizer,
  audioContext
} from 'AudioSystem';
import { SimpleWindow } from '../../SimpleWindow';
import { CustomVisualizerSettings } from './CustomVisualizerSettings';
import { CanvasContainer } from './CanvasContainer';
import { connect } from 'react-redux';
import { stateQueries } from 'redux/StateQueries';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.uiComponentId;
  const uiComponent = stateQueries.getAllUiComponents(state)[id];
  return { uiComponent };
};

@connect(mapStateToProps)
export class CustomVisualizer extends React.Component {
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
      alert('Error! The value webAudioNodeId is fucked up.');
    }

    const webAudioNode = nodes.nodes[webAudioNodeId];

    if (R.isNil(webAudioNode)) {
      alert('Error. R.isNil(webAudioNode)');
      debugger;
    }
    this.visualizer = new InfiniteCustomVisualizer();
    this.visualizer.init(
      webAudioNode,
      this.canvasId // todo. should not have a static Id that makes it IMPOSSIBLE to instantiate several CustomVisualizer:s.
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

  canvasId =
    `canvas${this.props.uiComponent.id}`;

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
        <SimpleWindow title={`id${this.props.uiComponent.nodeId}`}>
          <CanvasContainer
            id={this.canvasId}
            width={this.props.uiComponent.canvasWidth}
            height={this.props.uiComponent.canvasHeight}
          />
          <CustomVisualizerSettings
            {...this.handlers}
            {...settingsProps}
          />
        </SimpleWindow>
      );
    }
}
