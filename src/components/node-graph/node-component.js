import React, { Component, Fragment } from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { deleteNodeAction } from 'redux/modules/node';
import { NEditor } from './new-NEditor'; 
import { nodeTypeDefinitions } from 'NodeTypeDefinitions';
import { moveGraphNode } from 'redux/modules/node-graph';
import { getNodeById } from 'redux/StateQueries/new-state-queries/node-queries';
import { openModalAction } from 'redux/modules/ui';
import {
  ContextMenu,
  ContextMenuItem,
} from 'components/semantic++';
import { InputComponent } from './input-component';
import { OutputComponent } from './output-component';
import { getKnobByNodeId } from 'redux/StateQueries/new-state-queries/knob-queries';
import {
  getNodeGraphPositioByNodeId,
  getUiComponentByNodeId
} from 'redux/StateQueries/new-state-queries/ui-queries';
import { Knob, TimeDomainVisualizer, FrequencyDomainVisualizer, CustomVisualizer } from 'components';

const mapStateToProps = (state, ownProps) => ({
  node: getNodeById(state, ownProps.nodeId),
  position: getNodeGraphPositioByNodeId(state, ownProps.nodeId),
  knob: getKnobByNodeId(state, ownProps.nodeId),
  uiComponent: getUiComponentByNodeId(state, ownProps.nodeId)
});

@connect(mapStateToProps)
export class NodeComponent extends Component {
  state = { contextMenu: { visible: false, left: 0, top: 0 } }

  /**
   * refs to components!
   */
  inputs = []
  output = null

  onHeaderUp = () => {
    this.dispatchMoveAction();
  }

  hideContextMenu = () => {
    this.setState({ contextMenu: { visible: false } });
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
            onInputDotClick={this.props.onInputDotClick}
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
        onOutputDotClick={this.props.onOutputDotClick}
      />
    );
  }

  onContextMenu = (e => {
    e.preventDefault();
    
    // grab global fixed x and y position of mouse.
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // display ContextMenu at that position.
    this.setState({ contextMenu: { visible: true, left: mouseX, top: mouseY } });
  })

  onEdit = () => {
    const { node } = this.props;
    this.hideContextMenu();
    openModalAction('CreateNodeModal', {
      nodeType: node.nodeType,
      node,
    });
  }

  onDelete = () => {
    this.hideContextMenu();
    deleteNodeAction([this.props.node.id]);
  }

  renderContextMenu = () => {
    const { visible, left, top } = this.state.contextMenu;

    if (!visible) {
      return null;
    }

    return (
      <ContextMenu top={top} left={left} hide={this.hideContextMenu}>
        <ContextMenuItem caption="Edit" onClick={this.onEdit} />
        <ContextMenuItem caption="Delete" onClick={this.onDelete} />
      </ContextMenu>
    );
  }

  render() {
    const { node, position, knob, uiComponent } = this.props;
    const { output, connectableInputs, knobableInputs } = nodeTypeDefinitions[node.nodeType];
    const inputs = R.union(connectableInputs, knobableInputs);

    const knobComponent = knob ? <Knob knob={knob} /> : null;
    let uiComponentComponent = null;
    if (uiComponent) {
      switch (uiComponent.type) {
        case 'TimeDomainAnalyser':
          uiComponentComponent = <TimeDomainVisualizer uiComponentId={uiComponent.id}/>;
          break;
        case 'FrequencyDomainAnalyser':
          uiComponentComponent = <FrequencyDomainVisualizer uiComponentId={uiComponent.id}/>;
          break;
        case 'CustomAnalyser':
          uiComponentComponent = <CustomVisualizer uiComponentId={uiComponent.id}/>;
          break;
        default:
          throw `Error! ${uiComponent.type} is an unknown component type.`;
      }
    } /* else if (node.nodeType === 'CustomAnalyser') {
      uiComponentComponent = <CustomVisualizer uiComponentId={uiComponent.id}/>;
    } */

    // reset
    this.inputs = [];
    this.output = null;

    return (
      <Fragment>
        <div
          ref={ref => this.rootElement = ref} // eslint-disable-line
          className='NodeContainer'
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          onContextMenu={this.onContextMenu}
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
          {knobComponent}
          {/* <p>uiComponent: {JSON.stringify(uiComponent, null, 2)}</p> */}
          {uiComponentComponent}
        </div>
        {this.renderContextMenu()}
      </Fragment>
      
    );
  }
}
