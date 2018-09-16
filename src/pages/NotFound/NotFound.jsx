import React from 'react';
import Menu from 'Components/Menu';
import './style.scss';

const NotFound = () => (
    <div>
        <Menu />
        <img src='/img/error404.png' className = 'centerPic' />
    </div>
);

export default NotFound;
