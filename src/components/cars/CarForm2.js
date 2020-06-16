import React, { useState } from "react";
import CarManager from "../../modules/CarManager";
import "./CarForm.css";

const CarForm2 = (props) => {
  const [car, setCar] = useState({
    photo: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...car };
    stateToChange[evt.target.id] = evt.target.value;
    setCar(stateToChange);
  };

  const constructNewCar = (evt) => {
    evt.preventDefault();
    if (car.photo === "") {
      window.alert("Please select a photo");
    } else {
      setIsLoading(true);
      CarManager.post(car).then(() => props.history.push("/cars"));
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
              id="photo"
              placeholder="Photo"
            />
            <label htmlFor="photo">Photo</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewCar}
            >
              Add Car
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default CarForm2;
