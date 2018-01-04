import { connect } from 'react-redux';
import { NodeManagerDrawer } from './NodeManagerDrawer';
import {
  memoizedStateQueries,
  stateQueries,
} from '../../redux';

const mapStateToProps =
  state => ({
    ungroupedNodes:
      memoizedStateQueries.getAllUngroupedNodes(state),
    nodes:
      stateQueries.getAllNodes(state),
  });

export const NodeManagerDrawerContainer =
  connect(mapStateToProps)(NodeManagerDrawer);
