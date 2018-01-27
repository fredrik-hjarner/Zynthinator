import React from 'react';

export class ContextMenu extends React.Component {
  componentDidMount = () => {
    $('.ui.dropdown').dropdown({ // eslint-disable-line
      action: 'hide',
      duration: 0,
      on: 'hover',
      delay: {
        hide: 400,
        show: 0,
      }
    });
  }

  render = () => {
    const { children } = this.props;
    
    return (
      <div className="ui tiny compact vertical menu">
        {children}
      </div>
    );
  }
}
