import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sities from 'Containers/Sities';

const MainPage = () => (
  <div>
    <p style={{ textAlign: 'center' }}>
      {'Учебное приложение: "Список задачь" . Сам список '}<Link to='/list'>тут</Link>
    </p>
    <Sities />
  </div>
);

MainPage.propTypes = {
  onGetInfo: PropTypes.func,
};

export default MainPage;
