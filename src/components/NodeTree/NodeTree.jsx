// import _ from 'lodash';
import React from 'react';
import { SimpleWindowRedux } from '../../components/SimpleWindow';
import {
  stateQueries,
} from '../../redux';
import { stringHelpers } from '../../helpers';

export const NodeTree =
  (props) => {
    // get the list of all nodes
    const { connectionsInReadableFormat } = props;
    const numConnections = connectionsInReadableFormat.length;

    if (numConnections < 1) {
      return null;
    }

    // const { allChains } = props;

    // const chainElements =
    //   allChains.map(chain => (
    //     <div>
    //       {
    //         chain.map(id => _.padStart(id, 4)).join('\u2192')
    //       }
    //     </div>));

    // ----------------------------------
    //
    // ----------------------------------

    const nodesInReadableFormat =
      props.alignedChains
        .map(chain =>
          chain
            .map((nodeId) => {
              if (!nodeId) {
                return '';
              }
              const node = props.nodes[nodeId];
              return stateQueries.getNodeInReadableFormat(node);
            })
            .map(str =>
              stringHelpers.setLength(
                14,
                str
              )));

    const randomElements =
      nodesInReadableFormat.map(arr => (
        <div>{arr.join(' \u2192 ')}</div>
      ));

    return (
      <SimpleWindowRedux title="Node tree">
        <div style={{ maxWidth: '400px' }}>
          <div style={{ overflowX: 'scroll' }}>
            {/* {<pre>{chainElements}</pre>} */}
            <pre>{randomElements}</pre>
          </div>
        </div>
      </SimpleWindowRedux>
    );
  };
