import React, { Component } from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { NEditor } from './new-NEditor'; 
import { nodeTypeDefinitions } from 'NodeTypeDefinitions';
import { moveGraphNode } from 'redux/modules/node-graph';
import { getNodeById } from 'redux/StateQueries/new-state-queries/nodes-queries';
import { getNodeGraphPositioByNodeId } from 'redux/StateQueries/new-state-queries/ui';
import { InputComponent } from './input-component';
import { OutputComponent } from './output-component';

const mapStateToProps = (state, ownProps) => ({
  node: getNodeById(state, ownProps.nodeId),
  position: getNodeGraphPositioByNodeId(state, ownProps.nodeId)
});

@connect(mapStateToProps)
export class NodeComponent extends Component {
  /**
   * refs to components!
   */
  inputs = []
  output = null

  onHeaderUp = () => {
    this.dispatchMoveAction();
  }

  dispatchMoveAction = () => {
    const containerElement = document.getElementById('node-graph-container');
    const containerRect = containerElement.getBoundingClientRect();

    const boundingRect = this.rootElement.getBoundingClientRect();

    const { id } = this.props.node;

    const x = boundingRect.left - containerRect.left + containerElement.scrollLeft;
    const y = boundingRect.top - containerRect.top + containerElement.scrollTop;

    // redux action
    moveGraphNode(id, x, y);
  }

  onHeaderDown = (e) => {
    e.stopPropagation();

    const x = e.pageX;
    const y = e.pageY;

    // if we're dragging i.e. creating a connection.
    if (NEditor.dragMode === 2) {
      return;
    }

    NEditor.dragMode = 1;

    NEditor.offsetX = this.rootElement.offsetLeft - x; // todo should be done with setState.
    NEditor.offsetY = this.rootElement.offsetTop - y;

    window.addEventListener('mousemove', this.onNodeDragMouseMove);
    window.addEventListener('mouseup', this.onNodeDragMouseUp);
  }

  onNodeDragMouseUp = (e) => {
    e.stopPropagation(); e.preventDefault();
  
    NEditor.dragMode = 0;
  
    window.removeEventListener('mousemove', this.onNodeDragMouseMove);
    window.removeEventListener('mouseup', this.onNodeDragMouseUp);
  };

  onNodeDragMouseMove = (e) => {
    e.stopPropagation(); e.preventDefault();
    const { rootElement } = this;
    rootElement.style.left = `${e.pageX + NEditor.offsetX}px`;
    rootElement.style.top = `${e.pageY + NEditor.offsetY}px`;

    this.dispatchMoveAction();
    
    // Object.values(this.inputs).forEach(input => {
    //   if (input) {
    //     input.updateConnectionPaths();
    //   }
    // });
    // if (this.output) {
    //   this.output.updateConnectionPaths();
    // }
  };

  renderInputs = (inputs) => {
    const { id } = this.props.node;

    return (
      <div className='input-list'>
        {inputs.map(input => (
          <InputComponent
            nodeId={id}
            input={input}
            ref={ref => {
              this.inputs.push(ref);
              this.props.registerInputComponentRef(input)(ref);
            }}
          />
        ))}
      </div>
    );
  } 

  renderOutput = (output) => {
    if (!output) {
      return null;
    }
    const { id } = this.props.node;
    return (
      <OutputComponent
        nodeId={id}
        ref={ref => {
          this.output = ref;
          this.props.registerOutputComponentRef(ref);
        }}
      />
    );
  }

  render() {
    const { node, position } = this.props;
    const { output, connectableInputs, knobableInputs } = nodeTypeDefinitions[node.nodeType];
    const inputs = R.union(connectableInputs, knobableInputs);

    // reset
    this.inputs = [];
    this.output = null;

    return (
      <div
        ref={ref => this.rootElement = ref} // eslint-disable-line
        className='NodeContainer'
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <header
          onMouseDown={this.onHeaderDown}
          onMouseUp={this.onHeaderUp}
        >
          {node.nodeType}
        </header>
        <div className='inputAndOutputContainer'>
          {this.renderInputs(inputs)}
          {this.renderOutput(output || node.nodeType === 'Knob')}
        </div>
      </div>
    );
  }
}
