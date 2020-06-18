import React from "react";

const PhotoResult = ({ photos }) => {
  return (
    <div className="card car-photo-card">
      <div className="card-content">
        <picture>
          <img
            src={photos.results.urls.small}
            alt={photos.results.description}
          />
        </picture>
        <button>Save</button>
      </div>
    </div>
  );
};

export default PhotoResult;
