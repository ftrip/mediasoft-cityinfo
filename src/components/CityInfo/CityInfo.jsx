import React from 'react';
import PropTypes from 'prop-types';

const CityInfo = ({ population, citiesError, shortName, country }) => {
    if (citiesError) {
        return <div>{'Error load cities'}</div>;
    }

    return <div>
        <h1>{shortName}</h1>
        <ul>
            <li>{`Находится в: ${country}`}</li>
            <li>{`Население: ${population} человек`} </li>
        </ul>
    </div>;
};

CityInfo.propTypes = {
    geoName: PropTypes.string,
    population: PropTypes.number,
    citiesError: PropTypes.bool
};

export default CityInfo;
