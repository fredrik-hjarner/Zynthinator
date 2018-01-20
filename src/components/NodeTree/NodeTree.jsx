import _ from 'lodash';
import React from 'react';
import { SimpleWindowRedux } from '../../components/SimpleWindow';

export const NodeTree =
  (props) => {
    // get the list of all nodes
    const { connectionsInReadableFormat } = props;
    const numConnections = connectionsInReadableFormat.length;

    if (numConnections < 1) {
      return null;
    }

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
      <SimpleWindowRedux title="Node tree">
        <div style={{ maxWidth: '300px' }}>
          <div style={{ overflowX: 'scroll' }}>
            <pre>{chainElements}</pre>
            <pre>{randomElements}</pre>
          </div>
        </div>
      </SimpleWindowRedux>
    );
  };
