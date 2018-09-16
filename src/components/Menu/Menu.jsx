import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Menu = () => <Navbar fixedTop>
    <Navbar.Brand>
        <Link to='/'>ИнфоГород</Link>
    </Navbar.Brand>
    <Link to='/'>Главная </Link>
    <Link to='/continents/'>Континенты </Link>
    <Link to='/countries/'>Страны</Link>
</Navbar>;

export default Menu;
