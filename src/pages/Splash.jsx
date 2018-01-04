import React from 'react';
import {
  Container,
  Button,
} from 'semantic-ui-react';
import {
  push,
} from 'react-router-redux';
import './styles.sass';
import {
  store,
  stateQueries,
} from '../redux';

export const Splash =
  () => (
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
          onClick={() => store.dispatch(push('/synth'))}
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
