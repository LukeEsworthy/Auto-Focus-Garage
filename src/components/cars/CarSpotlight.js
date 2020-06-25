import React, { useState, useEffect } from "react";
import CarManager from "../../modules/CarManager";
import "./CarCard.css";

const CarSpotlight = (props) => {
  const [car, setCar] = useState({
    photo: "",
    brandName: "",
    modelName: "",
    carInfo: "",
  });

  useEffect(() => {
    CarManager.get(props.carId).then((car) => {
      setCar({
        photo: car.photo,
        brandName: car.brandName,
        modelName: car.modelName,
        carInfo: car.carInfo,
      });
    });
  }, [props.carId]);

  return (
    <div className="card">
      <picture>
        <img src={car.photo} alt="Image not available" />
      </picture>
      <div className="card-content">
        <h3>
          Make: <span className="card-carMake">{car.brandName}</span>
        </h3>
        <h3>
          Model: <span className="card-carModel">{car.modelName}</span>
        </h3>
        <p>{car.carInfo}</p>
      </div>
    </div>
  );
};

export default CarSpotlight;
