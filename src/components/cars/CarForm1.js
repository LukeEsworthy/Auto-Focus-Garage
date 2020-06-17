import React, { useState } from "react";
import CarManager from "../../modules/CarManager";
import "./CarForm.css";

const CarForm1 = (props) => {
  const [car, setCar] = useState({
    brandName: "",
    modelName: "",
    carInfo: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...car };
    stateToChange[evt.target.id] = evt.target.value;
    setCar(stateToChange);
  };

  const constructNewCar = (evt) => {
    evt.preventDefault();
    if (car.brandName === "" || car.modelName === "" || car.carInfo === " ") {
      window.alert("Please fill out all fields");
    } else {
      setIsLoading(true);
      CarManager.post(car).then(() =>
        props.history.push(`/cars/${props.carId}/new2`)
      );
      console.log(car);
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="brandName"
              placeholder="Car brand"
            />
            <label htmlFor="brandName">Brand</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="modelName"
              placeholder="Car model"
            />
            <label htmlFor="modelName">Model</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="carInfo"
              placeholder="Car Information"
            />
            <label htmlFor="carInfo">Info</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewCar}
            >
              Next
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default CarForm1;
