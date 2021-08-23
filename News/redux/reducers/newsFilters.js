import { actionConstants } from "../actionConstants";

export function newsFilters(state = {}, action) {
  switch (action.type) {
    case actionConstants.FILTER_NEWS:
      return action.payload;
    default:
      return state;
  }
}
