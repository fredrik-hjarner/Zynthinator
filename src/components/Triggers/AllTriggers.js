import React from 'react';
import { SimpleWindowRedux } from 'components/SimpleWindow';
import { Trigger } from './Trigger';
import * as R from 'ramda';
import { connect } from 'react-redux';

const AllTriggers =
  (props) => {
    const triggerElements =
      Object.values(props.triggers).map(t =>
        <Trigger trigger={t} />);

    if (triggerElements.length < 1) {
      return null;
    }

    return (
      <SimpleWindowRedux title="Triggers">
        {triggerElements}
      </SimpleWindowRedux>
    );
  };

const mapStateToProps =
  R.compose(
    R.pick(['triggers']),
    R.prop('nodeManagement'),
  );

const AllTriggersRedux =
  connect(
    mapStateToProps,
    {},
  )(AllTriggers);

export { AllTriggersRedux as AllTriggers };
