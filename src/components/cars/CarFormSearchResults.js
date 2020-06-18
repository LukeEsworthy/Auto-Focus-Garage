import React from "react";

const PhotoResult = ({ photo }) => {
  return (
    <div className="card car-photo-card">
      <div className="card-content">
        <picture>
          <img
            src={photo.results.urls.small}
            alt={photo.results.description}
          />
        </picture>
        <button>Save</button>
      </div>
    </div>
  );
};

export default PhotoResult;
