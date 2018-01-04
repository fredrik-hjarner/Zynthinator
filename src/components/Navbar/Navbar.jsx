import React from 'react';
// import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'semantic-ui-react';
import {
  ReplayAHistoryFile,
} from './ReplayAHistoryFile';
import {
  DownloadHistoryFileRedux,
} from './DownloadHistoryFileRedux';
import * as Actions from '../../redux';

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
            <Dropdown.Item>Load previous</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Nodes">
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateNodeModal', { nodeType: 'Oscillator' })}
            >
              Create oscillator
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateNodeModal', { nodeType: 'Gain' })}
            >
              Create gain
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateNodeModal', { nodeType: 'LowPassFilter' })}
            >
              Create low-pass filter
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateNodeModal', { nodeType: 'HighPassFilter' })}
            >
              Create high-pass filter
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateNodeModal', { nodeType: 'BandPassFilter' })}
            >
              Create band-pass filter
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateNodeModal', { nodeType: 'Noise' })}
            >
              Create noise
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateNodeModal', { nodeType: 'DcSignal' })}
            >
              Create DC signal
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateNodeModal', { nodeType: 'Delay' })}
            >
              Create Delay
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateNodeModal', { nodeType: 'LowResolutionSine' })}
            >
              Create low-resolution sine
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateNodeModal', { nodeType: 'ADSR' })}
            >
              Create ADSR
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateNodeModal', { nodeType: 'TimeDomainAnalyser' })}
            >
              Create time domain analyser
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => Actions.openModalAction('CreateNodeModal', { nodeType: 'FrequencyDomainAnalyser' })}
            >
              Create frequency domain analyser
            </Dropdown.Item>
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
              Delete node
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
        <Dropdown item text="Groups">
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
        <Dropdown item text="Examples" disabled>
          <Dropdown.Menu>
            <Dropdown.Item disabled>Undo an action</Dropdown.Item>
            <Dropdown.Item disabled>Redo an action</Dropdown.Item>
            <Dropdown.Divider />
            <DownloadHistoryFileRedux />
            <ReplayAHistoryFile />
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
