import React from 'react';
import PropTypes from 'prop-types';

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
    const { children, left, top } = this.props;
    
    return (
      <div style={{ display: 'inline-block', position: 'fixed', left, top, zIndex: 2 }}>
        <div className="ui tiny compact vertical menu">
          {children}
        </div>
      </div>
    );
  }
}

ContextMenu.propTypes = {
  // left position of the context menu
  left: PropTypes.number.isRequired,
  // top position of the context menu
  top: PropTypes.number.isRequired
};
