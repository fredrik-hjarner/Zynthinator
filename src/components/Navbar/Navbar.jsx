import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

export const NavbarContainer =
  connect(
    null,
    null,
  )(Navbar);

/* Navbar.propTypes = {
  path: PropTypes.string.isRequired,
}; */
