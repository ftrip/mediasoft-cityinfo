import fetch from 'isomorphic-fetch';
import { RECEIVE_CONTINENTS, LOAD_CONTINENTS } from './constants';

const beginLoad = () => ({ type: LOAD_CONTINENTS, isLoading: true });
const setContinents = json => ({ type: RECEIVE_CONTINENTS, data: json });

export const getLinks = () => (dispatch) => {
    dispatch(beginLoad());

    fetch('https://api.teleport.org/api/continents/')
        .then(response => response.json())
        .then(json => dispatch(setContinents(json)));
};
