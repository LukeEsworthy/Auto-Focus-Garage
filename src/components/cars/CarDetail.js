import React, { useState, useEffect } from "react";
import CarManager from "../../modules/CarManager";
import "./CarCard.css";

const CarDetail = (props) => {
  const [car, setCar] = useState({
    photo: "",
    brandName: "",
    modelName: "",
    carInfo: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    CarManager.get(props.carId).then((car) => {
      setCar({
        photo: car.photo,
        brandName: car.brandName,
        modelName: car.modelName,
        carInfo: car.carInfo,
      });
      setIsLoading(false);
    });
  }, [props.carId]);

  const handleDelete = () => {
    setIsLoading(true);
    CarManager.delete(props.carId).then(() => {
      props.history.push("/cars");
    });
  };

  return (
    <div className="card">
      <picture className="car-detail-photo">
        <img src={car.photo} alt="Car Photo" />
      </picture>
      <div className="card-content">
        <h3>{car.brandName}</h3>
        <h3>{car.modelName}</h3>
        <p>{car.carInfo}</p>
        <button
          type="button"
          onClick={() => props.history.push(`/cars/${props.carId}/edit`)}
        >
          Edit
        </button>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CarDetail;
