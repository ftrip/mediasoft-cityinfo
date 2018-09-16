import fetch from 'isomorphic-fetch';
import { LINKS } from './constants';

const beginLoad = () => ({ type: 'LOAD', isLoading: true });
const setData = json => ({ type: 'RECEIVE_COUNTRIES', data: json });

export const getLinks = () => (dispatch) => {
  dispatch(beginLoad());

  fetch('https://api.teleport.org/api/countries/')
    .then(response => response.json())
    .then(json => dispatch(setData(json)));
};
