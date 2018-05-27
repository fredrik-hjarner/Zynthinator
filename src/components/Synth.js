import React from 'react';
import {
  AllTriggers,
  // TimeDomainVisualizers,
  FrequencyDomainVisualizers,
  CustomVisualizers,
  ModalWindow,
  MessageModal,
  NodeGraph
} from '../components';

/**
 * For testin'
 */
import { Button } from 'semantic-ui-react';
import { openMessageModalAction } from 'redux/modules/ui';


/**
 * Just to test MessageModal.
 */
class TestButton extends React.Component {
  onClick = () => openMessageModalAction({
    header: 'sample header',
    content: 'sample message',
    icon: 'info circle',
    color: 'blue'
  })
  render = () => (
    <Button onClick={this.onClick}>Test</Button>
  )
}

const drawFirstColumns = () => (
  <div>
    <TestButton/>
    <AllTriggers />
    { /* <ListOfGroups /> */ }
    {/* <TimeDomainVisualizers /> */}
    <FrequencyDomainVisualizers />
    <CustomVisualizers />
    <ModalWindow />
    <MessageModal />
  </div>
);

export const Synth = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '500px 1fr',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'grey'
    }}
  >
    {drawFirstColumns()}
    <NodeGraph />
  </div>
);
