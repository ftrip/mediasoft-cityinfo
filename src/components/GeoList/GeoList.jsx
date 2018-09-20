import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class GeoList extends React.Component {
  render = () => <ol>
      {this.props.data && this.props.data.map(item => <li key={item.name}><Link to='/'>{item.name}</Link></li>)}
  </ol>;
}

GeoList.propTypes = {
    data: PropTypes.object
};

export default GeoList;
