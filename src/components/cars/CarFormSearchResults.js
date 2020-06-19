import React from "react";

const PhotoResult = (props) => {
  return (
    <div className="card car-photo-card">
      <div className="card-content">
        <picture>
          <img src={props.ferrari.urls.small} alt={props.ferrari.description} />
        </picture>
        <button>Save</button>
      </div>
    </div>
  );
};

export default PhotoResult;
