import {actionConstants} from '../actionConstants';

export function newsList(state = {}, action) {
  switch (action.type) {
    case actionConstants.FIRST_NEWS_PAGE_LOADED:
      return action.payload;
    case actionConstants.NEXT_NEWS_PAGE_LOADED:
      return {
        ...state,
        articles: [...state?.articles, ...action.payload.articles],
      };
    default:
      return state;
  }
}
