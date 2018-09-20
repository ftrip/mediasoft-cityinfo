import fetch from 'isomorphic-fetch';

const beginSearchCity = () => ({ type: 'SEARCH_CITY' });
const setData = json => ({ type: 'RECEIVE_SEARCH_CITY', data: json });

const searchCity = city => (dispatch) => {
    dispatch(beginSearchCity());

    fetch(`https://api.teleport.org/api/cities/?search=${city}`)
        .then(response => response.json())
        .then(json => dispatch(setData(json)));
};

export default searchCity;
