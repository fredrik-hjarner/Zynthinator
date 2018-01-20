import { connect } from 'react-redux';
import { Connections } from './Connections';
import {
  memoizedStateQueries,
} from '../../redux';

const mapStateToProps =
  state => ({
    connectionsInReadableFormat:
      memoizedStateQueries.getConnectionsInReadableFormat(state)
  });

const ConnectionsContainer =
  connect(mapStateToProps)(Connections);

export { ConnectionsContainer as Connections };
