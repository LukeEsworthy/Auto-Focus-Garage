import React from "react";
import "./CarForm.css";

const PhotoResult = (props) => {
  return (
    <div className="card car-photo-card">
      <div className="card-content">
        <picture>
          <img
            src={props.resultPics.urls.small}
            alt={props.resultPics.description}
          />
        </picture>
        <button>Save</button>
      </div>
    </div>
  );
};

export default PhotoResult;
