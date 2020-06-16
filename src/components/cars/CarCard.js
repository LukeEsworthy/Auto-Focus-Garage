import React from "react";
import "./CarCard.css";
import { Link } from "react-router-dom";

const CarCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Make: <span className="card-carMake">{props.car.brandName}</span>
        </h3>
        <h3>Model: {props.car.modelName}</h3>
        <p>{props.car.carInfo}</p>
        <Link to={`/cars/${props.car.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
