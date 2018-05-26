import React from 'react';

export class CanvasContainer extends React.PureComponent {
  // state = {
  //   ref: null // eslint-disable-line
  // }

  // setRef = ref => this.setState({ ref })  // eslint-disable-line

  componentDidMount = () => {
    this.observer = new MutationObserver(this.onResize);
    this.observer.observe(this.ref, { attributes: true });
  }

  onResize = (mutations) => {
    const latestMutation = mutations[mutations.length - 1];
    const { width, height } = latestMutation.target.style;

    this.canvas.style.width = width;
    this.canvas.style.height = height;
  }

  // get scrollbarWidth() {
  //   return this.state.ref ?  : 0;
  // }

  render = () => (
    <div
      ref={ref => this.ref = ref} // eslint-disable-line
      style={{
        display: 'block', resize: 'both', overflow: 'auto', width: this.props.width + 5, height: this.props.height + 5
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
