import React from 'react';
import * as C from '../components';

/**
 * For testin'
 */
import { Button } from 'semantic-ui-react';
// import { connect } from 'react-redux';
import { openMessageModalAction } from 'redux/modules/ui';

// const mapStateToProps = state => ({
// 
// });

// const mapDispatchToProps = dispatch => ({
//   openMessageModal: () => 
// });

/**
 * Just to test MessageModal.
 */
// @connect(null, mapDispatchToProps)
class TestButton extends React.Component {
  onClick = () => {
    openMessageModalAction('Fuck', 'hello');
  }
  render = () => (
    <Button onClick={this.onClick}>Test</Button>
  )
}

export const Synth = () => (
  <div>
    <TestButton/>
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
