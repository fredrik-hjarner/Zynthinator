import React from 'react';
import * as C from '../components';

export function Home() {
  return (
    <div>
      <C.AllKnobs />
      <C.AllTriggers />
      {/* <C.Nodes /> */}
      {/* <C.Connections /> */}
      <C.NodeTree />
      { /* <C.ListOfGroups /> */ }
      <C.TimeDomainVisualizers />
      <C.FrequencyDomainVisualizers />
      <C.ModalWindow />
    </div>
  );
}
