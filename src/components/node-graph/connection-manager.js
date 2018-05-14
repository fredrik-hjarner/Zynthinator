import React, { Component } from 'react';
import { connect } from 'react-redux'; // eslint-disable-line
import { stateQueries } from 'redux/StateQueries'; // eslint-disable-line
import './styles/node-graph.sass';

/*********************
 * SvgComponent
 *********************/

class SvgComponent extends Component { // eslint-disable-line
  render = () => {
    const { x1, y1, x2, y2 } = this.props;

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
        stroke='#999999'
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
  render = () => { // eslint-disable-line
    const { data } = this.props;

    return Object.entries(data).map(([connectionId, { x1, y1, x2, y2 }]) => (
      <SvgComponent key={connectionId} x1={x1} y1={y1} x2={x2} y2={y2}/>
    ));
  };
}
