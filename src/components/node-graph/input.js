import { NEditor } from './Neditor';
import { svgManager } from './svg';

/* eslint-disable */
export class Input {
  constructor(pElm, name, nodeName){
    this.name   = name;
    this.nodeName = nodeName;
    this.root   = document.createElement("li");
    this.dot    = document.createElement("i");
    const label = document.createElement("span");
  
    this.connections = [];
  
    //Create Elements
    pElm.appendChild(this.root);
    this.root.appendChild(this.dot);
    this.root.appendChild(label);
  
    //Define the Elements
    this.root.className = "Input";
    this.root.ref = this;
    label.innerHTML = name;
    this.dot.innerHTML = "&nbsp;";
  
    this.dot.addEventListener("click", NEditor.onInputClick);
  }

  /*--------------------------------------------------------
  Common Methods */

  //Get the position of the connection ui element
  getPos(){
    return NEditor.getConnPos(this.dot);
  }

  //Just updates the UI if the connection is currently active
  // That is show it as green.
  updateDotColor(){
    const inputIsConnected = this.connections.length > 0;

    if (inputIsConnected) {
      this.root.classList.add("Active")
    } else {
      this.root.classList.remove("Active");
    }
  }

  //Used mostly for dragging nodes, so this allows the connections to be redrawn
  updateConnectionPaths() {
    this.connections.forEach(NEditor.updateConnPath);
  }

  /*--------------------------------------------------------
  Input Methods */

  // This concretely establishes the connection.
  //Applying a connection from an output
  /**
   *  connection = {
   *    input: Input,
   *    output: Input,
   *    path: SVGPathElement
   *  }
   */
  finishCreateConnection(connection) {
    //If moving a connection to here, tell previous input to clear itself.
    // if (connection.input != null) {
    //   console.log('finishCreateConnection: connection.input != null');
    //   connection.input.disconnectInput();
    // };

    connection.input = this;			//Saving this connection as the input reference

    // redux action
    // connectNodes({
    //   parentNode: connection.output.nodeName,
    //   parentInput: connection.output.name,
    //   childNode: connection.input.nodeName,
    //   childInput: connection.input.name
    // });

    this.connections.push(connection);	//Saving the path reference to this object
    this.updateDotColor();		//Update the state on both sides of the connection, TODO some kind of event handling scheme would work better maybe
    connection.output.updateDotColor();

    NEditor.updateConnPath(connection);
    svgManager.setCurveColor(connection.path, true);
  }

  //clearing the connection from an output
  disconnectInput() {
    if(this.connections.length > 0){
      var pathWeAreGoingToMove = this.connections[0];
      const { input, output } = pathWeAreGoingToMove;

      // window.connections = window.connections.filter(({ parentNode, parentInput, childNode, childInput }) =>
      //   !(parentNode === output.nodeName &&
      //   parentInput === output.name &&
      //   childNode === input.nodeName &&
      //   childInput === input.name)
      // );
      
      pathWeAreGoingToMove.input = null;

      const deletedConnection = this.connections.shift();

      this.updateDotColor();
      return pathWeAreGoingToMove;
    }
  }
}
