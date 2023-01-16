import React from 'react';
import { useContext, useRef } from 'react';
import { CarContext } from './CarContext';

function CarForm() {
  const { addCar } = useContext(CarContext);
  const brandRef = useRef();
  const modelRef = useRef();
  const yearRef = useRef();
  const colorRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar({
      brand: brandRef.current.value,
      model: modelRef.current.value,
      year: yearRef.current.value,
      color: colorRef.current.value,
    });
    brandRef.current.value = '';
    modelRef.current.value = '';
    yearRef.current.value = '';
    colorRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Brand:
        <input type="text" ref={brandRef} />
      </label>
      <br />
      <label>
        Model:
        <input type="text" ref={modelRef} />
      </label>
      <br />
      <label>
        Year:
        <input type="text" ref={yearRef} />
      </label>
      <br />
      <label>
        Color:
        <input type="text" ref={colorRef} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default CarForm;
