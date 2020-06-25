import React, { useState, useEffect } from "react";
import UserBioManager from "../../modules/UserBioManager";
import "./UserBioForm.css";

const UserBioEditForm = (props) => {
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

  const updateExistingUserBio = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedUserBio = {
      id: props.match.params.userBioId,
      name: userBio.name,
      location: userBio.location,
      equipment: userBio.equipment,
      faveCar: userBio.faveCar,
      bio: userBio.bio,
      userId: props.userId,
    };

    UserBioManager.update(editedUserBio).then(() =>
      props.history.push("/home")
    );
  };

  useEffect(() => {
    UserBioManager.get(props.match.params.userBioId).then((userBio) => {
      setUserBio(userBio);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={userBio.name}
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="location"
              value={userBio.location}
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="equipment"
              value={userBio.equipment}
            />
            <label htmlFor="equipment">Equipment</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="faveCar"
              value={userBio.faveCar}
            />
            <label htmlFor="faveCar">Favorite Car</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="bio"
              value={userBio.bio}
            />
            <label htmlFor="bio">Bio</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingUserBio}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default UserBioEditForm;
