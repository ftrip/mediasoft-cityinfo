import fetch from 'isomorphic-fetch';

const beginLoad = () => ({ type: 'LOAD_CITY_INFO' });
const setCityInfo = (json, geonameid) => ({ type: 'RECEIVE_CITY_INFO', data: json, geonameid });

const getCityInfo = geonameid => (dispatch) => {
    dispatch(beginLoad());

    fetch(`https://api.teleport.org/api/cities/geonameid:${geonameid}/`)
        .then(response => response.json())
        .then(json => dispatch(setCityInfo(json, geonameid)));
};

export default getCityInfo;
