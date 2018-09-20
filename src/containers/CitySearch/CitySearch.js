import { connect } from 'react-redux';
import searchCity from 'Thunks/searchCity';
import CitySearch from 'Components/CitySearch';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    searchCity: city => dispatch(searchCity(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch);
