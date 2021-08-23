import {combineReducers} from 'redux';
import {newsFilters} from './newsFilters';
import {newsList} from './newsList';
import {sourcesList} from './sourcesList';

const rootReducer = combineReducers({
  filters: newsFilters,
  news: newsList,
  sources: sourcesList,
});

export default rootReducer;
