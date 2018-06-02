import { unknownKeysThrowsExceptions } from 'helpers/unknownKeysThrowsExceptions';

export const actionTypes = unknownKeysThrowsExceptions({
  CREATE_GROUP: 'CREATE_GROUP',
  OPEN_MODAL: 'OPEN_MODAL',
  OPEN_MESSAGE_MODAL: 'OPEN_MESSAGE_MODAL',
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
  CALCULATE_HIGHEST_NODE_ID: 'CALCULATE_HIGHEST_NODE_ID',
  CALCULATE_HIGHEST_UI_ID: 'CALCULATE_HIGHEST_UI_ID',
  MOVE_GRAPH_NODE: 'MOVE_GRAPH_NODE' // 'zynthinator:node-graph:move-node'
});
