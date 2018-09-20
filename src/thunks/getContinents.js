import fetch from 'isomorphic-fetch';

const beginLoad = () => ({ type: 'LOAD_CONTINENTS' });
const setContinents = json => ({ type: 'RECEIVE_CONTINENTS', data: json });

const getContinents = () => (dispatch) => {
    dispatch(beginLoad());

    fetch('https://api.teleport.org/api/continents/')
        .then(response => response.json())
        .then(json => dispatch(setContinents(json)));
};

export default getContinents;
