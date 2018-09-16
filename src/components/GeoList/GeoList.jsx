import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class GeoList extends React.Component {
  componentDidMount = () => { if (!this.props.data) this.props.onGetData(); }

  render = () => <ul>
      {this.props.data && this.props.data.map(item => <li key={item.name}><Link to='/'>{item.name}</Link></li>)}
  </ul>;
}

GeoList.propTypes = {
    onGetData: PropTypes.func,
    data: PropTypes.object
};

export default GeoList;
