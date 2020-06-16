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
      <div className="card-content">
        {/* <picture>
                    <img src={require({car.photo}) alt="Car Photo"} />
                </picture> */}
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
