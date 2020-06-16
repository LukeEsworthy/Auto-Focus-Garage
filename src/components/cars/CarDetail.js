import React, { useState, useEffect } from "react";
import CarManager from "../../modules/CarManager";
import "./CarDetail.css";

const CarDetail = (props) => {
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
      <div className="card-content">
        {/* <picture>
                    <img src={require({car.photo}) alt="Car Photo"} />
                </picture> */}
        <h3>{car.brandName}</h3>
        <h3>{car.modelName}</h3>
        <p>{car.carInfo}</p>
      </div>
    </div>
  );
};

export default CarDetail;
