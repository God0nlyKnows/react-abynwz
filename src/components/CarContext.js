import React from 'react';
import data from '../data/cars.json';

const CarContext = React.createContext({
  cars: data,
  searchKeyword: '',
  setSearchKeyword: (keyword) => {
    this.searchKeyword = keyword;
  },
  addCar: (car) => {
    this.cars = [...this.cars, car];
  },
  deleteCar: (id) => {
    this.cars = this.cars.filter((car) => car.id !== id);
  },
  editCar: (car) => {
    this.cars = this.cars.map((p) => {
      if (p.id === car.id) {
        return car;
      }
      return p;
    });
  },
});

export { CarContext };
