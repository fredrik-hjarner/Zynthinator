import { Layout } from 'components/Layout';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
	Route,
	Switch,
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { store } from 'redux/Store';
import 'semantic-ui-css/semantic.min.css';
import {
	connectionsListener,
	nodesListener,
	triggeredTriggersListener,
} from './AudioSystem';
import { history } from './history';
import { saveState } from './webStorage';

window.onerror = () => {
	const ret = window.confirm('Zynthinator crashed. Go back to splash screen?');
	if (ret) {
		location.pathname = 'splash.html'; // eslint-disable-line
	}
};

store.subscribe(() => saveState(store.getState())); // todo this code does not belong here. Looks like shit.
store.subscribe(() => nodesListener.onActionWasDispatched(store.getState()));
store.subscribe(() => connectionsListener.onActionWasDispatched(store.getState()));
store.subscribe(() => triggeredTriggersListener.onActionWasDispatched(store.getState()));

/**
 * Execute the listeners once at the startup of the app.
 */
nodesListener.onActionWasDispatched(store.getState());
connectionsListener.onActionWasDispatched(store.getState());

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route path="*" component={Layout} />
			</Switch>
		</ConnectedRouter>
	</Provider>
);

const domElement = document.getElementById('app');

ReactDOM.render(<App />, domElement);
