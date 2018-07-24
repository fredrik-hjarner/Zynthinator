import React, { Component } from 'react';
import { NEditor } from './new-NEditor';

export class OutputComponent extends Component {
  onOutputClick = (e) => {
    const { nodeId } = this.props;
    e.stopPropagation(); e.preventDefault();
    const pos = NEditor.getConnPos(this.dot);

    this.props.onOutputDotClick(nodeId, pos.x, pos.y);
  }

  // Get the position of the connection ui element
  getPos() {
    return NEditor.getConnPos(this.dot);
  }

  render() {
    return (
      <div className='output-list'>
        <li className='Output'>
          <i
            ref={ref => this.dot = ref} // eslint-disable-line
            onClick={this.onOutputClick}
          >
            {`${' '}`}
          </i>
          <span>out</span>
        </li>
      </div>
    );
  }
}
