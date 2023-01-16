import React from 'react';
import { useState } from 'react';
import CarList from './components/CarList';
import SearchBar from './components/SearchBar';
import CarForm from './components/CarForm';
import CarContext from './components/CarContext';

function App() {
  const [cars, searchKeyword, setSearchKeyword] = useState(CarContext);
  console.log(cars);
  return (
    <>
      <SearchBar
        searchKeyword={searchKeyword}
        cars={cars}
        setSearchKeyword={setSearchKeyword}
      />
      <CarList />
      <CarForm />
    </>
  );
}

export default App;
