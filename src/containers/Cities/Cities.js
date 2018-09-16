import { connect } from 'react-redux';
import GeoList from 'Components/GeoList';
import { getLinks } from './actions';

const mapStateToProps = state => ({
  data: state.countries && JSON.stringify(state.countries)
  //data: state.x && JSON.stringify(state.x._links['country:items'])
});

const mapDispatchToProps = dispatch => ({
  onGetData: () => dispatch(getLinks())
});

export default connect(mapStateToProps, mapDispatchToProps)(GeoList);
