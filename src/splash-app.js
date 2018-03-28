import { Container, Button } from 'semantic-ui-react';
// import { push } from 'react-router-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'redux/Store';
import { stateQueries } from 'redux/StateQueries';
import './pages/styles.sass'; // todo fix path n shit.

// /**
//  * Execute the listeners once at the startup of the app.
//  */
// nodesListener.onActionWasDispatched(store.getState());
// connectionsListener.onActionWasDispatched(store.getState());

const App = () => (
  <div className="splash">
    <Container textAlign="center">
      <h1>ZYNTHINATOR</h1>
      {
        stateQueries.isDefaultState(store.getState()) ?
          <p>localStorage is empty.</p> :
          <div>
            <p>localStorage contains a previously saved state.</p>
            <p>If Zynthinator has problems resetting localStorage might help.</p>
          </div>
      }
      <Button
        primary
        size="huge"
        onClick={() => {
          // store.dispatch(push('/synth'));
          location.pathname = "index.html"; // eslint-disable-line
        }}
      >
        {"Start zynthin'" || true}
      </Button>
      <Button
        secondary
        size="huge"
        onClick={() => {
          localStorage.clear();
          location.reload(); // eslint-disable-line
        }}
      >
        Reset localStorage
      </Button>
    </Container>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
