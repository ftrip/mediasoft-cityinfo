import React from 'react';
import Menu from 'Components/Menu';
import MyChart from 'Components/MyChart';

const MainPage = () => (
    <div>
        <Menu />
        <p style={{ textAlign: 'center' }}>
            {'Здесь будет поиск городов(но это не точно)'}
        </p>
        <MyChart width = {500} height = {350} />
    </div>
);

export default MainPage;
