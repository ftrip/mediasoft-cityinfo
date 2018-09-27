import fetch from 'isomorphic-fetch';

const beginSearchCity = () => ({ type: 'SEARCH_CITY' });
const setData = json => ({ type: 'RECEIVE_SEARCH_CITY', data: json });
const errorSearchCity = err => ({ type: 'ERROR_SEARCH_CITY', error: err.message });

const searchCity = city => (dispatch) => {
    dispatch(beginSearchCity());

    fetch(`https://api.teleport.org/api/cities/?search=${city}`)
        .then(response => response.json())
        .then(json => dispatch(setData(json)))
        .catch(err => dispatch(errorSearchCity(err)));
};

export default searchCity;
