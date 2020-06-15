import React from "react";
import CarCard from "./components/cars/CarCard";
import UserBioCard from "./components/userBio/UserBioCard";
import "./AutoFocusGarage.css";

function App() {
  return (
    <div>
      <h2>
        Auto Focus Garage
        <br />
        <small>Your car spotting database</small>
      </h2>
      <div>
        <CarCard />
        <CarCard />
        <CarCard />
        <UserBioCard />
      </div>
    </div>
  );
}
export default App;
