import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";
import CarManager from "../../modules/CarManager";

const CarList = () => {
  const [cars, setCars] = useState([]);

  const deleteCar = (id) => {
    CarManager.delete(id).then(() => CarManager.getAll().then(setCars));
  };

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
        <CarCard key={cars.id} car={car} deleteCar={deleteCar} />
      ))}
    </div>
  );
};
export default CarList;
