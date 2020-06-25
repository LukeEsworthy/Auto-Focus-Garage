import React, { useState, useEffect } from "react";
import "./CarForm.css";
import CarManager from "../../modules/CarManager";

const PhotoResult = (props) => {
  const photoToBeSaved = {
    photo: props.resultPics.urls.small,
    userId: props.userId,
  };

  const saveCarPhoto = (e) => {
    e.preventDefault();
    CarManager.post(photoToBeSaved).then(() => props.history.push("/cars"));
  };

  return (
    <div className="card car-photo-card">
      <div className="card-content">
        <picture>
          <img
            src={props.resultPics.urls.small}
            alt={props.resultPics.description}
          />
        </picture>
        <button
          type="button"
          onClick={saveCarPhoto}
          className="save-photo-button"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PhotoResult;
