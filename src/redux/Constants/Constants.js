const _actionTypes = {
  CREATE_NODE: 'CREATE_NODE',
  CREATE_CONNECTION: 'CREATE_CONNECTION',
  DELETE_CONNECTION: 'DELETE_CONNECTION',
  DELETE_NODE: 'DELETE_NODE',
  DELETE_ALL_NODES: 'DELETE_ALL_NODES',
  CREATE_GROUP: 'CREATE_GROUP',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  CREATE_KNOB: 'CREATE_KNOB',
  MOVE_KNOB: 'MOVE_KNOB',
  DELETE_KNOB: 'DELETE_KNOB',
  CREATE_TRIGGER: 'CREATE_TRIGGER',
  DELETE_TRIGGER: 'DELETE_TRIGGER',
  CLICK_TRIGGER: 'CLICK_TRIGGER',
  TRIGGER_HANDLED: 'TRIGGER_HANDLED',
  UI_TD_ANALYSER_CHANGE_PARAMS: 'UI_TD_ANALYSER_CHANGE_PARAMS',
  UI_FD_ANALYSER_CHANGE_PARAMS: 'UI_FD_ANALYSER_CHANGE_PARAMS',
};

/**
 * Throw exception when trying to access a key that does not exist!
 */
const handler = {
  get(target, key) {
    if (key in target) {
      return target[key];
    }
    throw `Exception: '${key}' is not a valid name for a redux action.`;
  },
};

export const actionTypes =
  new Proxy(_actionTypes, handler);
