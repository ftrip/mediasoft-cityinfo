import { connect } from 'react-redux';
import GeoList from 'Components/GeoList';
import getContinents from 'Thunks/getContinents';

const mapStateToProps = state => ({
    data: state.continents.items
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getContinents())
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    if (!stateProps.data) dispatchProps.getData();
    return Object.assign({}, ownProps, stateProps);
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(GeoList);
