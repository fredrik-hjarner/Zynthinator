import React from 'react';
// import PropTypes from 'prop-types';
import { DropDownMenu } from 'components/semantic++';
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
    $('.ui.dropdown').dropdown({ /* todo this shit should be in the menu!! */ // eslint-disable-line
      action: 'hide',
      duration: 0,
      on: 'hover',
      delay: {
        hide: 400,
        show: 0,
      }
    });
  }

  render = () => (
    <DropDownMenu>
      <File />
      <Create />
      <Connect />
      <Modify />
      <Delete />
      <ExamplesMenu />
      <History />
    </DropDownMenu>
  );
}

/* Navbar.propTypes = {
  path: PropTypes.string.isRequired,
}; */
