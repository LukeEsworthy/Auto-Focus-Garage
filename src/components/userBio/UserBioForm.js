import React, { useState } from "react";
import UserBioManager from "../../modules/UserBioManager";
import "./UserBioForm.css";

const UserBioForm = (props) => {
  const [userBio, setUserBio] = useState({
    name: "",
    location: "",
    equipment: "",
    faveCar: "",
    bio: "",
    userId: props.userId,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...userBio };
    stateToChange[evt.target.id] = evt.target.value;
    setUserBio(stateToChange);
  };

  const createNewUserBio = (evt) => {
    evt.preventDefault();
    if (
      userBio.name === "" ||
      userBio.location === "" ||
      userBio.equipment === "" ||
      userBio.faveCar === "" ||
      userBio.bio === ""
    ) {
      window.alert("Please fill out all sections; we want to get to know you!");
    } else {
      setIsLoading(true);
      UserBioManager.post(userBio).then(() => props.history.push("/home"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="location"
              placeholder="Location"
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="equipment"
              placeholder="Equipment"
            />
            <label htmlFor="equipment">Equipment</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="faveCar"
              placeholder="Favorite Car"
            />
            <label htmlFor="faveCar">Favorite Car</label>
            <textarea
              type="text"
              required
              onChange={handleFieldChange}
              id="bio"
              placeholder="Bio"
            >
            </textarea>
            <label htmlFor="bio">Bio</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={createNewUserBio}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default UserBioForm;
