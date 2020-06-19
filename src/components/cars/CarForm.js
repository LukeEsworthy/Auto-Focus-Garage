// import React, { useState, useEffect } from "react";
// import Search from "./CarFormSearch";
// import PhotoResult from "./CarFormSearchResults";
// import UnsplashAPIKey from "../../APIKeys";
// import CarManager from "../../modules/CarManager";

// const UnsplashAPI_URL = `https://api.unsplash.com/search/photos?query=cars&client_id=${UnsplashAPIKey}`;

// const CarForm = () => {
//   const [loading, setLoading] = useState(true);
//   const [photos, setPhotos] = useState([]);
//   const [errorMessage, setErrorMessage] = useState(null);

//   useEffect(() => {
//     fetch(UnsplashAPI_URL)
//       .then((response) => response.json())
//       .then((jsonResponse) => {
//         setPhotos(jsonResponse.Search);
//         setLoading(false);
//       });
//   }, []);

//   const search = (searchValue) => {
//     setLoading(true);
//     setErrorMessage(null);

//     CarManager.getPhotos(searchValue)
//       .then((response) => response.json())
//       .then((jsonResponse) => {
//         if (jsonResponse.Response === "True") {
//           setPhotos(jsonResponse.Search);
//           setLoading(false);
//         } else {
//           setErrorMessage(jsonResponse.Error);
//           setLoading(false);
//         }
//       });
//   };

//   return (
//     <div className="add-car-form">
//       <Search search={search} />
//       <div className="photos">
//         {loading && !errorMessage ? (
//           <span>loading...</span>
//         ) : errorMessage ? (
//           <div className="errorMessage">{errorMessage}</div>
//         ) : (
//           photos.map((photo) => <PhotoResult photo={photo} />)
//         )}
//       </div>
//     </div>
//   );
// };

// export default CarForm;

// import React, { useState, useEffect } from "react";
// import Search from "./CarFormSearch";
// import PhotoResult from "./CarFormSearchResults";
// import CarManager from "../../modules/CarManager";

// const CarForm = (props) => {
//   const [photos, setPhotos] = useState([]);

//   const search = (searchValue) => {
//     CarManager.getPhotos(searchValue).then((photosFromAPI) => {
//       setPhotos(photosFromAPI);
//     });
//   };

//   return (
//     <div className="CarFormCard">
//       <Search search={search} />
//       <div className="carphotos">
//         {photos.map((photo) => (
//           <PhotoResult />
//         ))}
//       </div>
//     </div>
//   );

// const handleFieldChange = (evt) => {
//     const stateToChange = {...photos};
//     stateToChange[evt.target.id] = evt.target.value;
//     setPhotos(stateToChange);
// }

// const constructNewCarCard = (evt) => {
//     evt.preventDefault();
//     setIsLoading(true);
//     CarManager.getPhotos()
// }
// };

// export default CarForm;

import React, { useState, useEffect } from "react";
import PhotoResult from "./CarFormSearchResults";
import CarManager from "../../modules/CarManager";

const CarForm = (props) => {
  const [ferrariPics, setFerrariPics] = useState([]);

  const displayFerraris = () => {
    return CarManager.getFerrari().then((ferrarisFromAPI) => {
      setFerrariPics(ferrarisFromAPI.results);
    });
  };

  useEffect(() => {
    displayFerraris();
  }, []);

  return (
    <div className="CarFormCard">
      <div className="ferraripics">
        {ferrariPics.map((ferrari) => (
          <PhotoResult key={ferrari.id} ferrari={ferrari} {...props} />
        ))}
      </div>
    </div>
  );
};

export default CarForm;
