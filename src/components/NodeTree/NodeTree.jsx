import React from 'react';
import * as R from 'ramda';
import { Icon } from 'semantic-ui-react';
import { SimpleWindowRedux } from 'components/SimpleWindow';
import { Node } from '../Node';

export const NodeTree =
  (props) => {
    // get the list of all nodes
    const { connectionsInReadableFormat } = props;
    const numConnections = connectionsInReadableFormat.length;

    if (numConnections < 1) {
      // return null; // display only when we have at least one connection.
    }

    // const { allChains } = props;

    // const chainElements =
    //   allChains.map(chain => (
    //     <div>
    //       {
    //         chain.map(id => _.padStart(id, 4)).join('\u2192')
    //       }
    //     </div>));

    /**
     * Constructing an array of node-element-arrays.
     */
    const asNodeElements =
      props.alignedChains
        .map(chain => 
          chain.map(nodeId => (nodeId === null ? <div /> : (<Node nodeId={nodeId} display="inline-block" />))));

    /**
     * Then the last step is to connect them with arrow Icon:s.
     */
    const elements =
      asNodeElements
        .map(chain => (
          // <div style={{ whiteSpace: 'nowrap' }}>
          R.intersperse(<Icon name="long arrow right" color="grey" size="big" />, chain)
          // </div>
        ));

    const flexed =
      elements
        .map(row => (
          <tr>
            {row.map(el => <td>{el}</td>)}
          </tr>
        ));

    // debugger;

    return (
      <SimpleWindowRedux title="Node tree">
        <div style={{ maxWidth: '500px', overflowX: 'scroll' }}>
          <table>
            {flexed}
          </table>
        </div>
      </SimpleWindowRedux>
    );
  };
