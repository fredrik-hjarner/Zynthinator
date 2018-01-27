import { connect } from 'react-redux';
import {
  stateQueries,
} from 'redux/StateQueries';
import { Connections } from './Connections';

const mapStateToProps =
  state => ({
    connections:
      stateQueries.getAllConnections(state)
  });

const ConnectionsContainer =
  connect(mapStateToProps)(Connections);

export { ConnectionsContainer as Connections };
