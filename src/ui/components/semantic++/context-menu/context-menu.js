import React from "react";
import $ from "jquery";
import PropTypes from "prop-types";

export class ContextMenu extends React.Component {
  componentDidMount = () => {
    $(".ui.dropdown").dropdown({
      // eslint-disable-line
      action: "hide",
      duration: 0,
      on: "hover",
      delay: {
        hide: 400,
        show: 0,
      },
    });

    this.hideTimer = setTimeout(this.props.hide, 1500);
  };

  /**
   * Only when the mouse is not over the context menu should
   * a timer start that will remove the context menu it.
   */
  onMouseOut = () => {
    clearTimeout(this.hideTimer);
    this.hideTimer = setTimeout(this.props.hide, 1500);
  };

  /**
   * When the mouse is over the context menu,
   * the context menu should not be removed.
   */
  onMouseOver = () => {
    clearTimeout(this.hideTimer);
  };

  componentWillUnmount = () => {
    // todo. should probably disable .dropdown.

    // the timer is no longer needed if component does no longer exist.
    clearTimeout(this.hideTimer);
  };

  render = () => {
    const { children, left, top } = this.props;

    return (
      <div
        style={{
          display: "inline-block",
          position: "fixed",
          left,
          top,
          zIndex: 2,
        }}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <div className="ui tiny compact vertical menu">{children}</div>
      </div>
    );
  };
}

ContextMenu.propTypes = {
  // left position of the context menu
  left: PropTypes.number.isRequired,
  // top position of the context menu
  top: PropTypes.number.isRequired,
  hide: PropTypes.func.isRequired,
};
