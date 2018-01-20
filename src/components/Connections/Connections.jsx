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

    return (
      <SimpleWindowRedux title="Connections">
        {elements}
      </SimpleWindowRedux>
    );
  };
