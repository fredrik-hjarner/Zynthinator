import React from 'react';
import { stateQueries } from 'redux/StateQueries';
import { SimpleWindowRedux } from 'components/SimpleWindow';
import { connect } from 'react-redux';

const ListOfGroups =
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

const mapStateToProps =
  (state) => {
    const {
      nodes,
      groups,
    } = state.nodeManagement;

    return {
      nodes,
      groups,
    };
  };

const ListOfGroupsRedux =
  connect(
    mapStateToProps,
    {},
  )(ListOfGroups);

export { ListOfGroupsRedux as ListOfGroups };
