import React from 'react';
import * as R from 'ramda';
import { DeleteConnectionDumb } from './DeleteConnectionDumb';
import { deleteConnectionAction } from 'redux/modules/connection';
import { connect } from 'react-redux';
import { memoizedStateQueries } from 'redux/StateQueries';

const mapStateToProps = (state, ownProps) => ({
  connectionsInReadableFormat: memoizedStateQueries.getConnectionsInReadableFormat(state),
  ...ownProps,
});

@connect(mapStateToProps)
export class DeleteConnectionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionIds: [],
    };
  }

  handlers = {
    onConfirm: () => deleteConnectionAction(this.state.connectionIds),
    onConnectionIdChange: (e, { value }) => {
      this.setState({ connectionIds: R.map(parseInt, value) });
    }
  }

  render = () => {
    const { connectionsInReadableFormat } = this.props;

    return (
      <DeleteConnectionDumb
        {...this.handlers}
        options={connectionsInReadableFormat}
      />
    );
  };
}
