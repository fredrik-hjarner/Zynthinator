import {
  renderNodeTreeHelpers,
} from './Helpers';

export const renderNodeTree =
  state =>
    renderNodeTreeHelpers.alignChainsBySkill(state);
