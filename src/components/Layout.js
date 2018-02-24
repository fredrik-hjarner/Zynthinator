import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import {
  NavbarContainer,
} from './Navbar';

const containerStyle = {
  marginTop: '20px',
};

export const Layout =
  () => (
    <React.Fragment>
      <NavbarContainer key="navbar-container" />
      <div key="switch-container" style={containerStyle}>
        <Switch>
          <Route path="*" component={Home} />
        </Switch>
      </div>
    </React.Fragment>
  );
