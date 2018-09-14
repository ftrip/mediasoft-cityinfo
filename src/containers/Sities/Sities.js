import { connect } from 'react-redux';
import SityList from 'Components/SityList';
import { getLinks } from './actions';

const mapStateToProps = state => ({
  data: state.x && JSON.stringify(state.x)
});

const mapDispatchToProps = dispatch => ({
  onGetData: () => dispatch(getLinks())
});

export default connect(mapStateToProps, mapDispatchToProps)(SityList);
