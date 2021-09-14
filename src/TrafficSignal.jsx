import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalColor) => {
  const obj = { red: redSignal, yellow: yellowSignal, green: greenSignal };
  if (obj[signalColor]) return obj[signalColor];
  return null;
};

const TrafficSignal = () => {
  const { signalColor, changeSignal } = useContext(CarsContext);

  return (
    <div>
      <div className="button-container">
        <button onClick={() => changeSignal('red')} type="button">
          Red
        </button>
        <button onClick={() => changeSignal('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => changeSignal('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

TrafficSignal.contextType = CarsContext;

export default TrafficSignal;
