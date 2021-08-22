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
    return Object.assign({}, state, {
      news: action.payload,
    });
  }
  if (action.type === 'PAGINATE') {
    return Object.assign({}, state, {
      news: {
        ...state.news,
        articles: [...state.news.articles, ...action.payload.articles],
      },
    });
  }
  return state;
}

export default rootReducer;
