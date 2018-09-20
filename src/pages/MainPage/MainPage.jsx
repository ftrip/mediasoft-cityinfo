import React from 'react';
import Menu from 'Components/Menu';
import Cities from 'Containers/Cities';
import CitySearch from '../../containers/CitySearch';

const MainPage = () => (
    <div>
        <Menu />
        <CitySearch />
        <Cities />
    </div>
);

export default MainPage;
