import { connect } from 'react-redux';
import GeoList from 'Components/GeoList';
import { getLinks } from './actions';

const mapStateToProps = state => ({
    data: state.countries.items
});

const mapDispatchToProps = dispatch => ({
    onGetData: () => dispatch(getLinks())
});

export default connect(mapStateToProps, mapDispatchToProps)(GeoList);
