import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const GeoList = ({ data, linkto, error }) => {
    if (error) {
        return <div className='alertError'><Alert bsStyle='danger'>{error}</Alert></div>;
    }
    return <div>
        <ol>
            {data && data.map(item => <li key={item.name}>
                <Link to={ `${linkto}${item.geoname}/` }>{item.name}</Link>
            </li>)}
        </ol>
    </div>;
};

GeoList.propTypes = {
    data: PropTypes.object,
    linkto: PropTypes.string,
    error: PropTypes.string
};

export default GeoList;
