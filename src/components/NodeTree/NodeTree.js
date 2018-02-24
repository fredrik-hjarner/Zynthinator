import React from 'react';
import * as R from 'ramda';
import { SimpleWindowRedux } from 'components/SimpleWindow';
import { Node } from '../Node';
import { ConnectionArrow } from '../connection-arrow';
import { formatChains, type } from './chains-helper';

export const NodeTree =
  (props) => {
    const {
      alignedChains
    } = props;

    /**
     * 2018-02-22:
     *    So try to call my chains-helper function now
     *    that calculates where the arrows are going to be
     *    and not be.
     */
    console.log(`alignedChains: ${JSON.stringify(alignedChains)}`);
    const chains = formatChains(alignedChains);
    console.log(`chains: ${JSON.stringify(chains)}`);

    /**
     * Constructing an array of node-element-arrays.
     */
    const asNodeElements =
      chains
        .map(chain => 
          chain.map(nodeId => (R.is(Number, nodeId) ? (<Node nodeId={nodeId} display="inline-block" />) : nodeId)));
    console.log(`asNodeElements: ${asNodeElements}`);

    /**
     * Then the last step is to connect them with arrow Icon:s.
     */
    const elements =
      asNodeElements
        .map(chain =>
          chain.map((val) => {
            if (val === type.ARROW) {
              return <ConnectionArrow />;
            } else if (val === type.NOTHING) {
              return null;
            }
            return val;
          }));

    const flexed =
      elements
        .map(row => (
          <tr>
            {row.map(el => <td>{el}</td>)}
          </tr>
        ));

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
