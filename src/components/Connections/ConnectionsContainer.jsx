import { connect } from 'react-redux';
import { Connections } from './Connections';
import {
  stateQueries,
} from '../../redux';

const mapStateToProps =
  state => ({
    connections:
      stateQueries.getAllConnections(state)
  });

const ConnectionsContainer =
  connect(mapStateToProps)(Connections);

export { ConnectionsContainer as Connections };
