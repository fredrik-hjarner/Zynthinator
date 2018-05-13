import { NEditor } from './Neditor';
import { svgManager } from './svg';

/* eslint-disable */
export class Output {
  constructor(pElm, name, nodeName, nodeId){
    this.nodeId = nodeId;
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
    this.root.className = "Output";
    this.root.ref = this;
    label.innerHTML = name;
    this.dot.innerHTML = "&nbsp;";
  
    this.dot.addEventListener("click", NEditor.onOutputClick);
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
    const outputIsConnected = this.connections.length > 0;

    if(outputIsConnected) {
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
  Output Methods */

  //This creates a new path between nodes
  beginCreateConnection() {
    const pos = NEditor.getConnPos(this.dot);

    const connection = {
      path: svgManager.createQCurve(pos.x, pos.y, pos.x, pos.y),
      input: null,
      output: this
    };

    svgManager.addPathToSvg(connection.path);
    this.connections.push(connection);
    return connection;
  }

  deleteConnection(connection){
    var i = this.connections.indexOf(connection);

    if(i > -1){
      svgManager.removePath(connection.path);
      this.connections.splice(i, 1);
      this.updateDotColor();
    }
  }

  connect(input){
    const connection = this.beginCreateConnection();
    input.finishCreateConnection(connection);
  }
}
