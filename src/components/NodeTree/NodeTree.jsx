import React from 'react';
import * as R from 'ramda';
import { Icon } from 'semantic-ui-react'; // eslint-disable-line
import { SimpleWindowRedux } from 'components/SimpleWindow';
// import {
//   stateQueries,
// } from 'redux/StateQueries';
// import { stringHelpers } from 'helpers';
import { Node } from '../Node';

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

    // const nodesInReadableFormat =
    //   props.alignedChains
    //     .map(chain =>
    //       chain
    //         .map((nodeId) => {
    //           if (nodeId === undefined || nodeId === null) { // I have holes in the data.
    //             return '';
    //           }
    //           const node = props.nodes[nodeId];
    //           return stateQueries.getNodeInReadableFormat(node);
    //         })
    //         .map(str =>
    //           stringHelpers.setLength(
    //             14,
    //             str
    //           )));

    // const randomElements =
    //   nodesInReadableFormat.map(arr => (
    //     <div>{arr.join(' \u2192 ')}</div>
    //   ));

    const withNilsRejected = // eslint-disable-line
      /**
       * alignedChains is an array of int-arrays.
       */
      props.alignedChains.map(chain => R.reject(R.isNil, chain));

    /**
     * Constructing an array of node-element-arrays.
     */
    const asNodeElements =
      withNilsRejected
        .map(chain => 
          chain.map(nodeId => (<Node nodeId={nodeId} display="inline-block" />)));

    /**
     * Then the last step is to connect them with arrow Icon:s.
     */
    const elements =
      asNodeElements
        .map(chain => (
          <div style={{ whiteSpace: 'nowrap' }}>
            {R.intersperse(<Icon name="long arrow right" color="grey" size="big" />, chain)}
          </div>
        ));


    // debugger;

    return (
      <SimpleWindowRedux title="Node tree">
        <div style={{ maxWidth: '500px', overflowX: 'scroll' }}>
          {/* {<pre>{chainElements}</pre>} */}
          {/* <pre>{randomElements}</pre> */}
          {elements}
        </div>
      </SimpleWindowRedux>
    );
  };
