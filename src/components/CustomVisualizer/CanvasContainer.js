import React from 'react';

export class CanvasContainer extends React.PureComponent {
  render = () => (
    <canvas
      style={{ display: 'block' }}
      id={this.props.id}
      width={this.props.width}
      height={this.props.height}
    />
  )
}
