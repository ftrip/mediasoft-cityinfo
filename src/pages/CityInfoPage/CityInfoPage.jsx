import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'Components/Menu';
import CityInfo from 'Containers/CityInfo';

const CityInfoPage = ({ match }) => (
    <div>
        <Menu />
        <CityInfo geoname = { match.params.name }/>
    </div>
);

CityInfoPage.propTypes = {
    match: PropTypes.object,
};

export default CityInfoPage;
