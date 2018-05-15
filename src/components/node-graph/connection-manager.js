import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'; // eslint-disable-line
import { stateQueries } from 'redux/StateQueries'; // eslint-disable-line
import './styles/node-graph.sass';

/*********************
 * SvgComponent
 *********************/

class SvgComponent extends Component { // eslint-disable-line
  render = () => {
    const { x1, y1, x2, y2, color } = this.props;

    const straightness = 1.5;
    const dif = Math.abs(x1 - x2) / straightness;

    // control point
    const cp1 = {
      x: x1 + dif,
      y: y1
    };

    // control point
    const cp2 = {
      x: x2 - dif,
      y: y2
    };

    return (
      <path
        fill='none'
        stroke={color}
        strokeWidth='2'
        d={`M${x1},${y1} C${cp1.x},${cp1.y} ${cp2.x},${cp2.y} ${x2},${y2}`}
      />
    );
  };
}

/*********************
 * ConnectionManager
 *********************/

// const mapStateToProps = (state) => ({
//   nodes: stateQueries.getAllNodes(state),
//   connections: stateQueries.getAllConnectionValues(state),
//   positions: state.ui.nodeGraphPositions
// });

// @connect(mapStateToProps)
export class ConnectionManager extends Component { // eslint-disable-line
  state = {
    /**
   * Mouse position inside svgElement.
   */
    mouseX: 0,
    mouseY: 0
  }

  updateMousePosition = (e) => {
    console.log('updateMousePosition()');

    const containerElement = document.getElementById('node-graph-container');
    const containerRect = containerElement.getBoundingClientRect();

    const htmlElement = document.documentElement;

    const mouseX = e.pageX - containerRect.left + containerElement.scrollLeft - htmlElement.scrollLeft;
    const mouseY = e.pageY - containerRect.top + containerElement.scrollTop - htmlElement.scrollTop;
    
    this.setState({ mouseX, mouseY });
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.updateMousePosition); // todo must detach on unmount. or must I???
  }

  render = () => { // eslint-disable-line
    const { data, connectionUnderConstruction: { exists, startPos } } = this.props;
    const { mouseX, mouseY } = this.state;

    return (
      <Fragment>
        {exists && <SvgComponent key='drag' x1={startPos.x} y1={startPos.y} x2={mouseX} y2={mouseY} color='#999999'/>}
        {Object.entries(data).map(([connectionId, { x1, y1, x2, y2 }]) => (
          <SvgComponent key={connectionId} x1={x1} y1={y1} x2={x2} y2={y2} color='#86d530'/>
        ))}
      </Fragment>
    );
  };
}
