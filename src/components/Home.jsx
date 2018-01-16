import React from 'react';
import { SimpleWindowRedux } from '../components/SimpleWindow';
// import { NodeList } from '../components/NodeList';
import * as C from '../components';

export function Home() {
  return (
    <div>
      <C.AllKnobs />
      <C.AllTriggers />
      <SimpleWindowRedux title="List of ungrouped nodes">
        <C.NodeManagerDrawerContainer />
      </SimpleWindowRedux>
      <SimpleWindowRedux title="List of connections">
        <C.ConnectionsDrawerContainer />
      </SimpleWindowRedux>
      { /* <C.ListOfGroupsRedux /> */ }
      <C.TimeDomainVisualizersRedux />
      <C.FrequencyDomainVisualizersRedux />
      <C.ModalWindow />
    </div>
  );
}
