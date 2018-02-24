import React from 'react';
import {
  SimpleWindowDumb,
} from './SimpleWindowDumb';

export class SimpleWindowControlled extends React.Component {
  state = {
    minimized: false, // eslint-disable-line
    settingsMinimized: true, // eslint-disable-line
  };

  handlers = {
    onMinimizeWindow:
      () => {
        this.setState(prevState => ({
          minimized:
            !prevState.minimized,
        }));
      },
    onMinimizeSettings:
      () => {
        this.setState(prevState => ({
          settingsMinimized:
            !prevState.settingsMinimized,
        }));
      },
  }

  render =
    () => (
      <SimpleWindowDumb
        {...this.props}
        {...this.handlers}
        {...this.state}
      />
    );
}
