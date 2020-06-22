import React, { useState, useEffect } from "react";
import UserBioCard from "../userBio/UserBioCard";
import CarSpotlight from "../cars/CarSpotlight";
import CarManager from "../../modules/CarManager";

const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlight = () => {
    CarManager.getRandomCarId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlight();
  }, []);

  return (
    <>
      <h2>I will put UserBioCard and random rotating CarCards here</h2>
      <UserBioCard />
      <button onClick={refreshSpotlight}>Next Car</button>
      {spotlightId && <CarSpotlight carId={spotlightId} />}
    </>
  );
};

export default Home;
