import { connect } from 'react-redux';
import GeoList from 'Components/GeoList';

const mapStateToProps = state => ({
    data: state.cities.items
});

export default connect(mapStateToProps)(GeoList);
