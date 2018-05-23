import React from 'react';
import {
// Accordion,
// Icon,
} from 'semantic-ui-react';
import {
  calculateFrequencyInNthBin, // eslint-disable-line
  InfiniteFrequencyDomainVizualizer,
} from 'AudioSystem';
import { SimpleWindow } from '../SimpleWindow';
import {
  FrequencyDomainVisualizerSettingsDumb,
} from './FrequencyDomainVisualizerSettingsDumb';

export class FrequencyDomainVisualizerDumb extends React.Component {
  componentDidMount() {
    this.visualizer = new InfiniteFrequencyDomainVizualizer();
    this.visualizer.init(
      this.props.analyserNode.webAudioNode.webAudioNode,
      this.frequencyDomainCanvasId,
    );
    this.visualizer.setMillisecondsBetweenRedraws(this.props.millisecondsBetweenRedraws);
  }

  componentWillUnmount =
    () => {
      this.visualizer.destructor();
    }

  frequencyDomainCanvasId =
    `frequencyDomainCanvas${this.props.analyserNode.id}`;

  handlers = {
    handleChange:
      (e) => {
        this.visualizer.setMillisecondsBetweenRedraws(e.target.value);
      },
  }

  render() {
    

    return (
      <SimpleWindow title={`id${this.props.analyserNode.webAudioNode.id}`}>
        <canvas
          style={{ display: 'block' }}
          id={this.frequencyDomainCanvasId}
          width={this.props.width}
          height={this.props.height}
        />
        <FrequencyDomainVisualizerSettingsDumb
          maxFrequency={maxFrequency}
          {...this.handlers}
          millisecondsBetweenRedraws={this.props.millisecondsBetweenRedraws}
        />
      </SimpleWindow>
    );
  }
}
