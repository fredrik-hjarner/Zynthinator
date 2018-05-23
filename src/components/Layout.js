import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Synth } from './Synth';
import { Navbar } from './Navbar';

const containerStyle = {
  marginTop: '20px',
};

export const Layout = () => (
  <React.Fragment>
    <Navbar key="navbar-container" />
    <div key="switch-container" style={containerStyle}>
      <Switch>
        <Route path="*" component={Synth} />
      </Switch>
    </div>
  </React.Fragment>
);
