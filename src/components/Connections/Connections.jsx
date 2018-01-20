import _ from 'lodash';
import React from 'react';
import { SimpleWindowRedux } from '../../components/SimpleWindow';

export const Connections =
  (props) => {
    // get the list of all nodes
    const { connectionsInReadableFormat } = props;
    const numConnections = connectionsInReadableFormat.length;

    if (numConnections < 1) {
      return null;
    }

    const elements =
      connectionsInReadableFormat
        .map(obj => ( // todo. this is bacause stateQueries.connectionsInReadableFormat sucks.
          <p>{`id${obj.value}: ${obj.text}`}</p>
        ));

    const { allChains } = props;

    const chainElements =
      allChains.map(chain => (
        <div>
          {
            chain.map(id => _.padStart(id, 4)).join('\u2192')
          }
        </div>));

    const randomElements =
      props.alignedChains
        .map(chain => (
          <div>
            {
              chain.map(id => _.padStart(id, 10)).join('\u2192')
            }
          </div>));

    return (
      <SimpleWindowRedux title="List of connections">
        <div style={{ maxWidth: '300px' }}>
          {/* { <div key="connectionsQuantity">Nr of connections: {numConnections}</div> } */}
          {elements}
          <h4>Attempt to draw connections as tree:</h4>
          <div style={{ overflowX: 'scroll' }}>
            <pre>{chainElements}</pre>
            <pre>{randomElements}</pre>
          </div>
        </div>
      </SimpleWindowRedux>
    );
  };
