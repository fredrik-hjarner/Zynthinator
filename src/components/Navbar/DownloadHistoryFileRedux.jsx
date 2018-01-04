import {
  connect,
} from 'react-redux';
import {
  DownloadHistoryFile,
} from './DownloadHistoryFile';

const mapStateToProps =
  state => ({
    state,
  });

export const DownloadHistoryFileRedux =
  connect(
    mapStateToProps,
    {},
  )(DownloadHistoryFile);
