import React from 'react';
import { SimpleWindowDumb } from './SimpleWindowDumb';

import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const { nodes } = state.nodeManagement;

  return {
    nodes,
    ...ownProps,
  };
};

@connect(mapStateToProps)
export class SimpleWindow extends React.Component {
  state = {
    minimized: false, // eslint-disable-line
    settingsminimized: true, // eslint-disable-line
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
          settingsminimized:
            !prevState.settingsminimized,
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
