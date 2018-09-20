import fetch from 'isomorphic-fetch';

const beginLoad = () => ({ type: 'LOAD_COUNTRIES' });
const setData = json => ({ type: 'RECEIVE_COUNTRIES', data: json });

const getCountries = () => (dispatch) => {
    dispatch(beginLoad());

    fetch('https://api.teleport.org/api/countries/')
        .then(response => response.json())
        .then(json => dispatch(setData(json)));
};

export default getCountries;
