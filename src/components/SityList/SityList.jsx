import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const SityList = ({ onGetData, data }) => <div>
  <Button onClick={onGetData}>Get data</Button>
  <p>xxxx</p>
  <p>{data}</p>
</div>;

SityList.propTypes = {
  onGetData: PropTypes.func,
  data: PropTypes.object
};

export default SityList;
