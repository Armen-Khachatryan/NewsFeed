import {API_KEY} from '../constants/apiConstants';
import {makeGetRequest} from '../service/axiosConfig';
import {actionConstants} from './actionConstants';

export function getSources() {
  return function (dispatch) {
    makeGetRequest(`/top-headlines/sources?apiKey=${API_KEY}`)
      .then(response => {
        dispatch(success(response.data.sources));
      })
      .catch(error => {});
  };

  function success(payload) {
    return {type: actionConstants.SOURCES_LOADED, payload};
  }
}

export function filterNews(payload) {
  return {type: actionConstants.FILTER_NEWS, payload};
}

export function getFilteredNews(pageNumber) {
  return function (dispatch, getState) {
    const {filters} = getState();
    makeGetRequest(
      `/top-headlines?country=${filters.country}&category=${filters.category}&language=${filters.language}&page=${pageNumber}&apiKey=${API_KEY}`,
    )
      .then(response => {
        if (pageNumber === 1) {
          dispatch(successFirstPage(response.data));
        } else {
          dispatch(successPaginate(response.data));
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  function successFirstPage(payload) {
    return {type: actionConstants.FIRST_NEWS_PAGE_LOADED, payload};
  }

  function successPaginate(payload) {
    return {type: actionConstants.NEXT_NEWS_PAGE_LOADED, payload};
  }
}
