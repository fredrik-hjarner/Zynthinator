// import * as R from 'ramda';
import { NEditor } from './new-NEditor'; 
// import { nodeTypeDefinitions } from 'NodeTypeDefinitions';
// import { moveGraphNode } from 'redux/modules/node-graph';
// import { createConnectionAction, deleteConnectionAction } from 'redux/modules/connection';
import { svgManager } from './svg';
// import { getNodeById } from 'redux/StateQueries/new-state-queries/node-queries';
// import { getNodeGraphPositioByNodeId } from 'redux/StateQueries/new-state-queries/ui';

export class Connection {
  constructor(inputDot, outputDot, connectionId) {
    this.inputDot = inputDot;
    this.outputDot = outputDot;
    this.connectionId = connectionId;

    const outPos = NEditor.getConnPos(outputDot);
    const inPos = NEditor.getConnPos(inputDot);

    this.pathElement = svgManager.createQCurve(outPos.x, outPos.y, inPos.x, inPos.y);
    svgManager.addPathToSvg(this.pathElement);
  }
}
