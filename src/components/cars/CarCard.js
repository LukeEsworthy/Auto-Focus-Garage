import React from "react";
import "./CarCard.css";
import { Link } from "react-router-dom";

const CarCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={props.car.photo} alt="Photo Unavailable" />
        </picture>
        <h3>
          Make: <span className="card-carMake">{props.car.brandName}</span>
        </h3>
        <h3>
          Model: <span className="card-carModel">{props.car.modelName}</span>
        </h3>
        <Link to={`/cars/${props.car.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
