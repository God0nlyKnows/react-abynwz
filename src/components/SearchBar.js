import React from 'react';
import { useContext, useMemo } from 'react';

function SearchBar(searchKeyword, cars, setSearchKeyword) {
  const filteredCars = useMemo(() => {
    return cars.filter((car) =>
      car.brand.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }, [searchKeyword, cars]);

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <ul>
        {filteredCars.map((car) => (
          <li key={car.id}>{car.brand}</li>
        ))}
      </ul>
    </>
  );
}

export default SearchBar;
