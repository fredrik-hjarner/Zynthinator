import React from 'react';
import { getScrollbarHeight } from 'helpers/scrollbar';

export class CanvasContainer extends React.PureComponent {
  componentDidMount = () => {
    this.observer = new MutationObserver(this.onResize);
    this.observer.observe(this.div, { attributes: true });
  }

  onResize = (mutations) => {
    const latestMutation = mutations[mutations.length - 1];
    const { width, height } = latestMutation.target.style;

    const scrollbarHeight = getScrollbarHeight(this.div);

    this.canvas.style.width = width;
    this.canvas.style.height = `${parseFloat(height.slice(0, -2)) - scrollbarHeight}px`;
  }

  render = () => (
    <div
      ref={ref => this.div = ref} // eslint-disable-line
      style={{
        display: 'block',
        resize: 'both',
        overflowX: 'scroll',
        overflowY: 'hidden',
        width: this.props.width,
        height: this.props.height
      }}
    >
      <canvas
        ref={ref => this.canvas = ref} // eslint-disable-line
        id={this.props.id}
        width={this.props.width}
        height={this.props.height}
      />
    </div>
  )
}
