import React from 'react';
import * as C from '../components';

export function Home() {
  return (
    <div>
      <C.AllKnobs />
      <C.AllTriggers />
      <C.NodeManagerDrawerContainer />
      <C.ConnectionsDrawerContainer />
      { /* <C.ListOfGroupsRedux /> */ }
      <C.TimeDomainVisualizersRedux />
      <C.FrequencyDomainVisualizersRedux />
      <C.ModalWindow />
    </div>
  );
}
