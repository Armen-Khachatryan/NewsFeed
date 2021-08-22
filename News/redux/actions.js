import {API_KEY} from '../constants/apiConstants';
import {makeGetRequest} from '../service/axiosConfig';

export function getSources() {
  return function (dispatch) {
    makeGetRequest(`/top-headlines/sources?apiKey=${API_KEY}`)
      .then(response => {
        dispatch(success(response.data.sources));
      })
      .catch(error => {});
  };

  function success(payload) {
    return {type: 'SOURCES_LOADED', payload};
  }
}

export function selectSource(payload) {
  return {type: 'SELECT_SOURCE', payload};
}

export function getFilteredNews(pageNumber) {
  return function (dispatch, getState) {
    const {selectedSource} = getState();
    makeGetRequest(
      `/top-headlines?country=${selectedSource.country}&category=${selectedSource.category}&language=${selectedSource.language}&page=${pageNumber}&apiKey=${API_KEY}`,
    ).then(response => {
      if (pageNumber === 1) {
        dispatch(successFirstPage(response.data));
      } else {
        dispatch(paginate(response.data));
      }
    });
  };

  function successFirstPage(payload) {
    return {type: 'NEWS_LOADED', payload};
  }

  function paginate(payload) {
    return {type: 'PAGINATE', payload};
  }
}

export const removeNews = () => {
  return {type: 'REMOVE_NEWS'};
};
