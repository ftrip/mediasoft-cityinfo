import { connect } from 'react-redux';
import CityInfo from 'Components/CityInfo';
import getCityInfo from 'Thunks/getCityInfo';

const mapStateToProps = (state, ownProps) => {
    debugger
    if (!state.cities.items) {
        return {
            citiesError: true
        };
    }
    const city = state.cities.items.filter(item => item.geoname === ownProps.geoname)[0];
    return {
        geoName: ownProps.geoname,
        population: city.population,
        shortName: city.shortName,
        country: city.country,
        citiesError: false
    };
};

const mapDispatchToProps = dispatch => ({
    getData: geonameid => dispatch(getCityInfo(geonameid))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    dispatchProps.getData(ownProps.geoname);
    return Object.assign({}, ownProps, stateProps);
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CityInfo);
