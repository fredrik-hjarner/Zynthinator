/* eslint-disable */
class SvgManager {
  constructor() {
    this.svg = null; //SVG where the line connections are drawn.

    this.inactivePathColor = "#999999";
    this.activePathColor = "#86d530";
    this.pathWidth = 2;
  }

  init(svgElementId) {
    this.svg = document.getElementById(svgElementId);
    this.svg.ns = this.svg.namespaceURI;
  };

  //Creates an Quadratic Curve path in SVG
  createQCurve(x, y, x2, y2) {
    var elm = document.createElementNS(this.svg.ns, "path");
    elm.setAttribute("fill", "none");
    elm.setAttribute("stroke", this.inactivePathColor);
    elm.setAttribute("stroke-width", this.pathWidth);

    this.setQCurveD(elm, x, y, x2, y2);
    return elm;
  }

  //This is seperated from the create so it can be reused as a way to update an existing path without duplicating code.
  /**
   * 
   * @param {*} elm SVGPathElement
   * @param {*} x1 
   * @param {*} y1 
   * @param {*} x2 
   * @param {*} y2 
   */
  setQCurveD(elm, x1, y1, x2, y2) {
    const straightness = 1.5;
    const dif = Math.abs(x1-x2) / straightness;
    
    // const str = "M" + x1 + "," + y1 + " C" +	//MoveTo
    //     (x1 + dif) + "," + y1 + " " +	//First Control Point
    //     (x2 - dif) + "," + y2 + " " +	//Second Control Point
    //     (x2) + "," + y2;				//End Point
        
    const s = `M${x1},${y1} C${x1 + dif},${y1} ${x2 - dif},${y2} ${x2},${y2}`;

    elm.setAttribute('d', s);

    return elm;
  }

  setCurveColor(elm,isActive){
    elm.setAttribute('stroke', (isActive)? this.activePathColor : this.inactivePathColor);
  }

  addPathToSvg(svgPathElement) {
    this.svg.appendChild(svgPathElement);
  }

  removePath(svgPathElement) {
    // todo some damn hack
    try {
      this.svg.removeChild(svgPathElement);
    } catch(exception) {

    }
  }
}

export const svgManager = new SvgManager();
// svgManager.init('connsvg');
