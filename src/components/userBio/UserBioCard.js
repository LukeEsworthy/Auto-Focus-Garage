import React from "react";
import "./UserBioCard.css";

const UserBioCard = (props) => {
  return (
    <>
      <section>
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/users/new");
          }}
        >
          Add/Edit Bio
        </button>
      </section>
      <div className="card">
        <div className="card-content">
          <h5>
            Name: <span className="card-userBioName">{props.bio.name}</span>
          </h5>
          <p>
            Location: <span>{props.bio.location}</span>
          </p>
          <p>
            Equipment: <span>{props.bio.equipment}</span>
          </p>
          <p>
            Favorite Car: <span>{props.bio.faveCar}</span>
          </p>
          <p>
            Bio: <span>{props.bio.bio}</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default UserBioCard;
