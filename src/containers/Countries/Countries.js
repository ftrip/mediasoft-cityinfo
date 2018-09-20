import { connect } from 'react-redux';
import GeoList from 'Components/GeoList';
import getCountries from 'Thunks/getCountries';

const mapStateToProps = state => ({
    data: state.countries.items
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getCountries())
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    if (!stateProps.data) dispatchProps.getData();
    return Object.assign({}, ownProps, stateProps);
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(GeoList);
