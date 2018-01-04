import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {
  routerMiddleware,
  // push,
} from 'react-router-redux';
import { rootReducer } from '../Reducers';
import { history } from '../../history';
import {
  getState,
} from '../../webStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = routerMiddleware(history);

const persistedState =
  getState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(middleware)),
);

window.store = store;
