import * as R from 'ramda';
import {
  connect,
} from 'react-redux';
import {
  AllTriggersControlled,
} from './AllTriggersControlled';

const mapStateToProps =
  R.compose(
    R.pick(['triggers']),
    R.prop('nodeManagement'),
  );

export const AllTriggersRedux =
  connect(
    mapStateToProps,
    {},
  )(AllTriggersControlled);
