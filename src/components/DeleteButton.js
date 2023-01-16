import React from 'react';
import { useContext } from 'react';
import { CarContext } from './CarContext';

function DeleteButton({ car }) {
  const { deleteCar } = useContext(CarContext);

  return <button onClick={() => deleteCar(car)}>Delete</button>;
}

export default DeleteButton;
