import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";
import CarManager from "../../modules/CarManager";

const CarList = (props) => {
  const [cars, setCars] = useState([]);

  const deleteCar = (id) => {
    CarManager.delete(id).then(() => CarManager.getAll().then(setCars));
  };

  const useUserId = sessionStorage.getItem("credentials");

  const getCars = () => {
    return CarManager.getUserCars(useUserId).then((carsFromAPI) => {
      setCars(carsFromAPI);
    });
  };

  useEffect(() => {
    getCars();
  }, );

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/cars/new");
          }}
        >
          Add Car
        </button>
      </section>
      <div className="container-cards">
        {cars.map((car) => (
          <CarCard key={cars.id} car={car} deleteCar={deleteCar} {...props} />
        ))}
      </div>
    </>
  );
};
export default CarList;
