// src/context/Provider.js
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {
  const [cars, setCars] = useState({ redCar: false, blueCar: false, yellowCar: false });
  const [signalColor, setSignal] = useState('red');

  const moveCar = (car, side) => { setCars({ ...cars, [car]: side }); };

  const changeSignal = (color) => setSignal(color)

  const contextValue = {
    cars,
    signalColor,
    moveCar,
    changeSignal,
  }

  return (
    <CarsContext.Provider value={ contextValue }>
      {children}
    </CarsContext.Provider>
  );
}

export default Provider;
