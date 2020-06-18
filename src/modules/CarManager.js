import UnsplashAPIKey from "../APIKeys";

const remoteURL = "http://localhost:5002";
const UnsplashURL = "https://api.unsplash.com/search/photos?query=";

export default {
  get(id) {
    return fetch(`${remoteURL}/cars/${id}`).then((result) => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/cars`).then((result) => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/cars/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newAnimal) {
    return fetch(`${remoteURL}/cars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAnimal),
    }).then((data) => data.json());
  },
  update(editedCar) {
    return fetch(`${remoteURL}/cars/${editedCar.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedCar),
    }).then((data) => data.json());
  },
  getPhotos(searchRequest) {
    return fetch(
      `${UnsplashURL}${searchRequest}&client_id=${UnsplashAPIKey}`
    ).then((result) => result.json());
  },
};
