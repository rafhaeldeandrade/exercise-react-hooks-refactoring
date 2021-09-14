// src/context/Provider.js
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {
  const [cars, setCars] = useState({ redCar: false, blueCar: false, yellowCar: false});

  const moveCar = (car, side) => {
    setCars({ ...cars, [car]: side });
  }

  const contextValue = {
    cars,
    moveCar,
  }

  return (
    <CarsContext.Provider value={ contextValue }>
      {children}
    </CarsContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
