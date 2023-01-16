import React from 'react';
import { useContext } from 'react';
import { CarContext } from './CarContext';
import Car from './Car';

function CarList() {
  const { cars } = useContext(CarContext);

  return (
    <div>
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;
