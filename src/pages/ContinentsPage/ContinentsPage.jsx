import React from 'react';
import Menu from 'Components/Menu';
import MyChart from 'Components/MyChart';
import Continents from 'Containers/Continents';

const ContinentsPage = () => (
    <div>
        <Menu />
        <Continents />
        <MyChart width = {500} height = {350} />
    </div>
);

export default ContinentsPage;
