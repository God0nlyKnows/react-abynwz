import React from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

function Car({ car }) {
  return (
    <div>
      <p>Brand: {car.brand}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <p>Color: {car.color}</p>
      <DeleteButton id={car.id} />
      <EditButton car={car} />
    </div>
  );
}

export default Car;
