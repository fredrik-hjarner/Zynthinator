import React from 'react';
import {
  SimpleWindowRedux,
} from '../SimpleWindow';
import {
  stateQueries,
} from '../../redux';

export const ListOfGroupsDumb =
  (props) => {
    const {
      nodes,
      groups,
    } = props;

    const html =
      Object.values(groups)
        .map((group) => {
          const nodesInGroup = [];
          nodesInGroup.push(...group.otherNodes);
          nodesInGroup.push(group.inputNode, group.outputNode);
          const li =
            nodesInGroup.map(nodeId => (
              <li>
                {stateQueries.getNodeByIdInReadableFormat(nodes, nodeId)}
              </li>
            ));
          return (
            <div>
              <div>{group.name}</div>
              <ul>
                {li}
              </ul>
            </div>);
        });

    return (
      <SimpleWindowRedux title="List of groups">
        {html}
      </SimpleWindowRedux>
    );
  };
