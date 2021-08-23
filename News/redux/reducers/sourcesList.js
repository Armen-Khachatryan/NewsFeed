import {actionConstants} from '../actionConstants';

export function sourcesList(state = [], action) {
  switch (action.type) {
    case actionConstants.SOURCES_LOADED:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
