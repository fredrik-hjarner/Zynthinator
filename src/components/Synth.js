import React from 'react';
import * as C from '../components';

/**
 * For testin'
 */
// import { Button } from 'semantic-ui-react';
// import { openMessageModalAction } from 'redux/modules/ui';


/**
 * Just to test MessageModal.
 */
// class TestButton extends React.Component {
//   onClick = () => openMessageModalAction({
//     header: 'sample header',
//     content: 'sample message',
//     icon: 'info circle',
//     color: 'blue'
//   })
//   render = () => (
//     <Button onClick={this.onClick}>Test</Button>
//   )
// }

const drawFirstColumns = () => (
  <div>
    {/* <TestButton/> */}
    <C.AllKnobs />
    <C.AllTriggers />
    {/* <C.Nodes /> */}
    {/* <C.Connections /> */}
    <C.NodeTree />
    { /* <C.ListOfGroups /> */ }
    <C.TimeDomainVisualizers />
    <C.FrequencyDomainVisualizers />
    <C.CustomVisualizers />
    <C.ModalWindow />
    <C.MessageModal />
  </div>
);

export const Synth = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'grey'
    }}
  >
    {drawFirstColumns()}
    <div style={{ borderStyle: 'solid', borderWidth: '2px' }}>
      <C.NodeGraph />
    </div>
  </div>
);
