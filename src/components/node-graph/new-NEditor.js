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
  if (!elm) {
    debugger;
  }
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
