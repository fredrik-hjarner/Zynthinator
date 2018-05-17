import React, { Component } from 'react';
import { NEditor } from './new-NEditor'; 

export class InputComponent extends Component {
  onInputClick = (e) => { // eslint-disable-line
    const { nodeId, input } = this.props;
    e.stopPropagation(); e.preventDefault();

    this.props.onInputDotClick(nodeId, input);
  }

  // Get the position of the connection ui element
  getPos() {
    return NEditor.getConnPos(this.dot);
  }


  render() {
    const { nodeId, input } = this.props;

    return (
      <li key={`${nodeId}-${input}`} className='Input'>
        <i
          ref={ref => this.dot = ref} // eslint-disable-line
          onClick={this.onInputClick}
        >
          {`${' '}`}
        </i>
        <span>{input}</span>
      </li>
    );
  }
}
