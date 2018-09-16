import fetch from 'isomorphic-fetch';
import { RECEIVE_COUNTRIES, LOAD_COUNTRIES } from './constants';

const beginLoad = () => ({ type: LOAD_COUNTRIES, isLoading: true });
const setData = json => ({ type: RECEIVE_COUNTRIES, data: json });

export const getLinks = () => (dispatch) => {
    dispatch(beginLoad());

    fetch('https://api.teleport.org/api/countries/')
        .then(response => response.json())
        .then(json => dispatch(setData(json)));
};
