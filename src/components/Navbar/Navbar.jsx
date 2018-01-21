import React from 'react';
// import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  ReplayAHistoryFile,
} from './ReplayAHistoryFile';
import {
  DownloadHistoryFileRedux,
} from './DownloadHistoryFileRedux';
import * as Actions from '../../redux';
import * as Examples from '../../Examples';
import { DropDownMenu } from './primitive-building-blocks';
import {
  File,
  Create,
  Connect,
  Modify,
  Delete,
  Examples as ExamplesMenu,
  History
} from './menus';

export class Navbar extends React.Component { // eslint-disable-line
  componentDidMount = () => {
    $('.ui.dropdown').dropdown({ // eslint-disable-line
      action: 'hide',
      duration: 0,
      on: 'hover',
      delay: {
        hide: 500,
        show: 0,
      }
    });
  }

  render = () => (
    <div>
      <Menu inverted>
        <Menu.Menu>
          <Dropdown item text="Nodes">
            <Dropdown.Menu>
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
          <Dropdown item text="Groups" disabled>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => Actions.openModalAction('CreateGroupModal')}
              >
                Create group
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="Examples">
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={Examples.example1}
              >
                1. Amplitude-modulated sine
              </Dropdown.Item>
              <Dropdown.Item
                onClick={Examples.example2}
              >
                2. Simple music with low-res sine
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
      <DropDownMenu>
        <File />
        <Create />
        <Connect />
        <Modify />
        <Delete />
        <ExamplesMenu />
        <History />
      </DropDownMenu>
    </div>
  );
}

export const NavbarContainer =
  connect(
    null,
    null,
  )(Navbar);

/* Navbar.propTypes = {
  path: PropTypes.string.isRequired,
}; */
