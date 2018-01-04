import _ from 'lodash';
import React from 'react';
/* import {
  renderNodeTree,
} from '../../redux'; */

export const ConnectionsDrawer =
  (props) => {
    // get the list of all nodes
    const { connectionsInReadableFormat } = props;
    const numConnections = connectionsInReadableFormat.length;
    const elements =
      connectionsInReadableFormat
        .map(obj => obj.text) // todo. this is bacause stateQueries.connectionsInReadableFormat sucks.
        .map(connection => (
          <li>{connection}</li>
        ));

    const { allChains } = props;

    const chainElements =
      allChains.map(chain => (
        <div>
          {
            chain.map(id => _.padStart(id, 2)).join('\u2192')
          }
        </div>));

    const randomElements =
      props.alignedChains
        .map(chain => (
          <div>
            {
              chain.map(id => _.padStart(id, 4)).join('\u2192')
            }
          </div>));

    return [
      <div key="connectionsQuantity">Nr of connections: {numConnections}</div>,
      <ul key="connectionsList">
        {elements}
      </ul>,
      <pre>{chainElements}</pre>,
      <pre>{randomElements}</pre>,
    ];
  };

/* NodeManagerDrawer.propTypes = {
  nodes: PropTypes.arrayOf(Node).isRequired,
}; */
