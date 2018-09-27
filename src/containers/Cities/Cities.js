import { connect } from 'react-redux';
import GeoList from 'Components/GeoList';

const mapStateToProps = state => ({
    data: state.cities.items,
    linkto: '/city/',
    error: state.cities.errorSearch
});

export default connect(mapStateToProps)(GeoList);
