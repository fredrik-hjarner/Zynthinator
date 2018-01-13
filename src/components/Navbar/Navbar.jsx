import React from 'react';
import _ from 'lodash';
// import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'semantic-ui-react';
import {
  ReplayAHistoryFile,
} from './ReplayAHistoryFile';
import {
  DownloadHistoryFileRedux,
} from './DownloadHistoryFileRedux';
import * as Actions from '../../redux';
import * as Examples from '../../Examples';

const createNodeDropdownItem =
  (nodeType, asReadable) => (
    <Dropdown.Item
      onClick={() => Actions.openModalAction('CreateNodeModal', { nodeType })}
    >
      Create {asReadable || _.lowerCase(nodeType)}
    </Dropdown.Item>
  );

export const Navbar = () => { // eslint-disable-line
  return (
    <Menu inverted>
      <Menu.Menu>
        <Dropdown item text="File">
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                localStorage.clear();
                location.reload(); // eslint-disable-line
              }}
            >
              New
            </Dropdown.Item>
            <Dropdown.Item disabled>Load previous</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Nodes">
          <Dropdown.Menu>
            {createNodeDropdownItem('Oscillator')}
            {createNodeDropdownItem('Gain')}
            {createNodeDropdownItem('LowPassFilter', 'low-pass filter')}
            {createNodeDropdownItem('HighPassFilter', 'high-pass filter')}
            {createNodeDropdownItem('BandPassFilter', 'band-pass filter')}
            {createNodeDropdownItem('Noise')}
            {createNodeDropdownItem('DcSignal', 'DC signal')}
            {createNodeDropdownItem('Delay')}
            {createNodeDropdownItem('LowResolutionSine', 'low-resolution filter')}
            {createNodeDropdownItem('ADSR', 'ADSR')}
            {createNodeDropdownItem('ChangeRange', 'ChangeRange')}
            {createNodeDropdownItem('TimeDomainAnalyser')}
            {createNodeDropdownItem('FrequencyDomainAnalyser')}
            <Dropdown.Divider />
            <Dropdown.Item
              onClick={() => Actions.openModalAction('EditNodeModal')}
            >
              Edit node
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              onClick={() => Actions.openModalAction('DeleteNodeModal')}
            >
              Delete nodes
            </Dropdown.Item>
            <Dropdown.Item disabled>
              Delete all nodes
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Connections">
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateConnectionModal')}
            >
              Create connection
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('DeleteConnectionModal')}
            >
              Delete connection
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Groups" disabled>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateGroupModal')}
            >
              Create group
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Knobs">
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateKnobModal')}
            >
              Create knob
            </Dropdown.Item>
            <Dropdown.Item disabled>
              Edit knob
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('DeleteKnobModal')}
            >
              Delete knob
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Triggers">
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateTriggerModal')}
            >
              Create trigger
            </Dropdown.Item>
            <Dropdown.Item disabled>
              Edit trigger
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('DeleteTriggerModal')}
            >
              Delete trigger
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Examples">
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={Examples.amplitudeModulatedSine}
            >
              1. Amplitude-modulated sine
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="History">
          <Dropdown.Menu>
            <Dropdown.Item disabled>Undo an action</Dropdown.Item>
            <Dropdown.Item disabled>Redo an action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item disabled>Download state file</Dropdown.Item>
            <Dropdown.Item disabled>Upload state file</Dropdown.Item>
            <Dropdown.Divider />
            <DownloadHistoryFileRedux />
            <ReplayAHistoryFile />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="View" disabled>
          <Dropdown.Menu>
            <Dropdown.Item>List of nodes</Dropdown.Item>
            <Dropdown.Item>List of connections</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};

/* Navbar.propTypes = {
  path: PropTypes.string.isRequired,
}; */
