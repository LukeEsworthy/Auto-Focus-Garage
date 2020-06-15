import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";
import CarManager from "../../modules/CarManager";

const CarList = () => {
  const [cars, setCars] = useState([]);

  const getCars = () => {
    return CarManager.getAll().then((carsFromAPI) => {
      setCars(carsFromAPI);
    });
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div className="container-cards">
      {cars.map((car) => (
        <CarCard key={cars.id} car={car} />
      ))}
    </div>
  );
};
export default CarList;
