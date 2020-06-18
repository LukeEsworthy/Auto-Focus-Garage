import React, { useState, useEffect } from "react";
import Search from "./CarFormSearch";
import PhotoResult from "./CarFormSearchResults";
import UnsplashAPIKey from "../../APIKeys";
import CarManager from "../../modules/CarManager";

const UnsplashAPI_URL = `https://api.unsplash.com/search/photos?query=cars&client_id=${UnsplashAPIKey}`;

const CarForm = () => {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(UnsplashAPI_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPhotos(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    CarManager.getPhotos(searchValue)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setPhotos(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div className="add-car-form">
      <Search search={search} />
      <div className="photos">
        photos.map((photo) => (
        <PhotoResult key={photos.id} />
        )) )}
      </div>
    </div>
  );
};

export default CarForm;
