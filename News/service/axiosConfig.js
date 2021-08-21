import axios from 'axios';
import {BASE_URL} from '../constants/apiConstants';

export function makeGetRequest(endpoint) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      url: `${BASE_URL}/${endpoint}`,
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error.response);
      });
  });
}
