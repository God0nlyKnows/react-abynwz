import React from 'react';
import { useContext } from 'react';
import { CarContext } from './CarContext';

function EditButton({ car }) {
  const { editCar } = useContext(CarContext);

  return <button onClick={() => editCar(car)}>Edit</button>;
}

export default EditButton;
