const initialState = {
  sources: [],
  news: [],
  selectedSource: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === 'SOURCES_LOADED') {
    return Object.assign({}, state, {
      sources: action.payload,
    });
  }
  if (action.type === 'SELECT_SOURCE') {
    return Object.assign({}, state, {
      selectedSource: action.payload,
    });
  }
  if (action.type === 'NEWS_LOADED') {
    if (Object.keys(state.news).length) {
      return Object.assign({}, state, {
        news: {
          ...state.news,
          articles: [...state.news.articles, ...action.payload.articles],
        },
      });
    } else {
      return Object.assign({}, state, {
        news: action.payload,
      });
    }
  }
  return state;
}

export default rootReducer;
