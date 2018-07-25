import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Synth } from './Synth';

const containerStyle = {
	marginTop: '20px',
};

export const Layout = () => (
	<>
		<Navbar key="navbar-container" />
		<div key="switch-container" style={containerStyle}>
			<Switch>
				<Route path="*" component={Synth} />
			</Switch>
		</div>
	</>
);
