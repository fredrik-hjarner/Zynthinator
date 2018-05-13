import * as R from 'ramda'; // eslint-disable-line
import { NEditor } from './new-NEditor';  // eslint-disable-line
import { Input } from './input'; // eslint-disable-line
import { Output } from './output'; // eslint-disable-line
import { nodeTypeDefinitions } from 'NodeTypeDefinitions'; // eslint-disable-line
import { moveGraphNode } from 'redux/modules/node-graph'; // eslint-disable-line
import { createConnectionAction, deleteConnectionAction } from 'redux/modules/connection'; // eslint-disable-line
import { svgManager } from './svg'; // eslint-disable-line
// import { getNodeById } from 'redux/StateQueries/new-state-queries/nodes-queries';
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
