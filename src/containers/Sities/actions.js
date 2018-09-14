import fetch from 'isomorphic-fetch';
import { LINKS } from './constants';

const beginLoad = () => ({ type: 'LOAD', isLoading: true });
const setData = json => ({ type: LINKS, links: json });

export const getLinks = () => (dispatch) => {
  dispatch(beginLoad());

  fetch('https://api.teleport.org/api/')
    .then(response => response.json())
    .then(json => dispatch(setData(json)));
};
