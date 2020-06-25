import React, { useState, useEffect } from "react";
import UserBioCard from "../userBio/UserBioCard";
import CarSpotlight from "../cars/CarSpotlight";
import CarManager from "../../modules/CarManager";
import UserBioManager from "../../modules/UserBioManager";

const Home = (props) => {
  const [spotlightId, setSpotlightId] = useState(0);
  const [bios, setBios] = useState([]);

  const refreshSpotlight = () => {
    CarManager.getRandomCarId().then(setSpotlightId);
  };

  const useUserId = sessionStorage.getItem("credentials");

  const getBios = () => {
    return UserBioManager.getUserBiosById(useUserId).then((bioFromAPI) => {
      setBios(bioFromAPI);
    });
  };

  const deleteBio = (id) => {
    UserBioManager.delete(id).then(() => getBios());
  };

  useEffect(() => {
    getBios();
  }, []);

  useEffect(() => {
    refreshSpotlight();
  }, []);

  return (
    <>
      <h2>I will put UserBioCard and random rotating CarCards here</h2>
      <section className="add-bio-button">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/userBios/new");
          }}
        >
          Add Bio
        </button>
      </section>
      <div className="bio-card-container">
        {bios.map((bio) => (
          <UserBioCard
            key={bios.id}
            bio={bio}
            deleteBio={deleteBio}
            {...props}
          />
        ))}
      </div>
      <button onClick={refreshSpotlight}>Next Car</button>
      {spotlightId && <CarSpotlight carId={spotlightId} />}
    </>
  );
};

export default Home;
