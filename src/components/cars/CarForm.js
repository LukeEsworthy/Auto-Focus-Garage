import React, { useState, useEffect } from "react";
import Search from "./CarFormSearch";
import PhotoResult from "./CarFormSearchResults";
import CarManager from "../../modules/CarManager";
import "./CarCard.css";

const CarForm = (props) => {
  const [picsFromAPI, setPicsFromAPI] = useState([]);

  const search = (searchValue) => {
    CarManager.getPhotos(searchValue).then((searchResults) => {
      setPicsFromAPI(searchResults.results);
    });
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="CarFormCard">
      <Search search={search} />
      <div className="picsFromAPI">
        {picsFromAPI.map((resultPics) => (
          <PhotoResult key={resultPics.id} resultPics={resultPics} {...props} />
        ))}
      </div>
    </div>
  );
};

export default CarForm;
