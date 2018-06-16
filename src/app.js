import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Layout } from './components/Layout';
import { store } from 'redux/Store';
import { saveState } from './webStorage';
import {
  nodesListener,
  connectionsListener,
  triggeredTriggersListener,
} from './AudioSystem';
import { history } from './history';

window.onerror = (message, source, lineno, colno, error) => { // eslint-disable-line
  const ret = window.confirm('Zynthinator crashed. Go back to splash screen?');
  if (ret) {
    location.pathname = "splash.html"; // eslint-disable-line
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
