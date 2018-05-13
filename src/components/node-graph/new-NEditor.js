import { svgManager } from './svg';
import { createConnectionAction } from 'redux/modules/connection';
// import { moveGraphNode } from 'redux/modules/node-graph';

/* eslint-disable */

//###########################################################################
// Globals
//###########################################################################

/**
 *  {
 *    inputs: Array<Input>,
 *    outputs: Array<Input>,
 *    name,
 *    eHeader,
 *    eList,
 *    eRoot,
 *  }
 * 
 * En "connection" sparas under en inputs men inte under en outputs.
 */
// window.nodes = {}; // contain all nodes.
// window.connections = {}; // contains all connections

//###########################################################################
//Main Static Object
//###########################################################################
export const NEditor = {};
/**
 * 0: no dragging
 * 1: dragging node
 * 2: dragging connection
 */
NEditor.dragMode = 0;
NEditor.dragItem = null;    //reference to the dragging HTML Element
NEditor.dragItemId = null;    //reference to node id
NEditor.startPos = null;    //Used for starting position of dragging lines
NEditor.offsetX = 0;        //OffsetX for dragging nodes
NEditor.offsetY = 0;        //OffsetY for dragging nodes

/*--------------------------------------------------------
Global Function */

// Gets the position of the middle of a DOM element.
NEditor.getConnPos = (elm) => {
  // Get positions of the 'node-graph-container'
  const containerElement = document.getElementById('node-graph-container');
  const containerRect = containerElement.getBoundingClientRect();

  const boundingRect = elm.getBoundingClientRect();
	const pos = {
    x: boundingRect.left - containerRect.left + containerElement.scrollLeft,
    y: boundingRect.top - containerRect.top + containerElement.scrollTop
  };

	pos.x += (elm.offsetWidth / 2) + 1.5; //Add some offset so its centers on the element
	pos.y += (elm.offsetHeight / 2) + 0.5;
	return pos;
};

//Used to reset the svg path between two nodes
/**
 *  o = {
 *    input: Input,
 *    output: Input,
 *    path: SVGPathElement
 *  }
 */
NEditor.updateConnPath = function(connection){
  const { inputDot, outputDot, pathElement } = connection;

  // if (input === null) {
  //   console.log('input === null');
  //   debugger;
  //   throw 'input === null';
  // }

	const pos1 = NEditor.getConnPos(inputDot);
  const pos2 = NEditor.getConnPos(outputDot);
	svgManager.setQCurveD(pathElement, pos1.x, pos1.y, pos2.x, pos2.y);
};

/*--------------------------------------------------------
Dragging Nodes */

/*--------------------------------------------------------
Dragging Paths */
NEditor.beginConnDrag = function(path){
  if (!path) {
    throw '!path';
  }

	if(NEditor.dragMode != 0) return;

	NEditor.dragMode = 2;
	NEditor.dragItem = path;
	NEditor.startPos = path.output.getPos();

	svgManager.setCurveColor(path.path,false);
	window.addEventListener("click", NEditor.onConnDragClick);
	window.addEventListener("mousemove", NEditor.onConnDragMouseMove);
};

NEditor.endConnDrag = function(){
  NEditor.dragMode = 0;
	window.removeEventListener("click",NEditor.onConnDragClick);
	window.removeEventListener("mousemove",NEditor.onConnDragMouseMove);
}

/**
 * When in process of creating a connection but one does not click on an input
 * but somewhere else. This deletes/cancels the connection.
 */
NEditor.onConnDragClick = function(e){
	e.stopPropagation(); e.preventDefault();
	NEditor.dragItem.output.deleteConnection(NEditor.dragItem);
	NEditor.endConnDrag();
};

NEditor.onConnDragMouseMove = function(e){
	e.stopPropagation(); e.preventDefault();
	if (NEditor.dragItem) {
    // Get positions of the 'node-graph-container'
  const containerElement = document.getElementById('node-graph-container');
  const containerRect = containerElement.getBoundingClientRect();

    const htmlElement = document.documentElement;

    const x2 = e.pageX - containerRect.left + containerElement.scrollLeft - htmlElement.scrollLeft;
    const y2 = e.pageY - containerRect.top + containerElement.scrollTop - htmlElement.scrollTop;
    // const x2 = e.offsetX;
    // const y2 = e.offsetY;
    svgManager.setQCurveD(NEditor.dragItem.path, NEditor.startPos.x, NEditor.startPos.y, x2, y2);
  };
};

/*--------------------------------------------------------
Connection Event Handling */
NEditor.onOutputClick = function(e){
	e.stopPropagation(); e.preventDefault();
	var path = e.target.parentNode.ref.beginCreateConnection();

	NEditor.beginConnDrag(path);
}

NEditor.onInputClick = function(e){
	e.stopPropagation(); e.preventDefault();
	var input = this.parentNode.ref;

	switch(NEditor.dragMode){
    case 2: //Path Drag
      input.finishCreateConnection(NEditor.dragItem);
      const connection = NEditor.dragItem;
      const connectionData = {
        name: '',
        parentNodeIds: [connection.output.nodeId],
        childNodes: [{
          nodeId: input.nodeId,
          input: connection.input.name
        }]
      }
      createConnectionAction(connectionData);
		  NEditor.endConnDrag();
		  break;
		case 0: //Not in drag mode
		  var path = input.disconnectInput();
		  if(path) {
        NEditor.beginConnDrag(path)
      };
		  break;
	}
}
