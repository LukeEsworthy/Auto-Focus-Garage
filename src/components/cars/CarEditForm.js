import React, { useState, useEffect } from "react";
import CarManager from "../../modules/CarManager";
import "./CarForm.css";

const CarEditForm = (props) => {
  const [car, setCar] = useState({
    brandName: "",
    modelName: "",
    carInfo: "",
    userId: props.userId,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...car };
    stateToChange[evt.target.id] = evt.target.value;
    setCar(stateToChange);
  };

  const updateExistingCar = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedCar = {
      id: props.match.params.carId,
      brandName: car.brandName,
      modelName: car.modelName,
      carInfo: car.carInfo,
      userId: props.userId,
    };

    CarManager.update(editedCar).then(() => props.history.push("/cars"));
  };

  useEffect(() => {
    CarManager.get(props.match.params.carId).then((car) => {
      setCar(car);
      setIsLoading(false);
    });
  }, [props.match.params.carId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="brandName"
              value={car.brandName}
            />
            <label htmlFor="brandName">Brand</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="modelName"
              value={car.modelName}
            />
            <label htmlFor="modelName">Model</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="carInfo"
              value={car.carInfo}
            />
            <label htmlFor="carInfo">Info</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingCar}
              className="btn btn-primary"
            >
              Next
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default CarEditForm;
