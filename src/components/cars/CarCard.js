import React from "react";

const CarCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Make: <span className="card-carMake">Ferrari</span>
        </h3>
        <h3>Model: Enzo</h3>
        <p>
          I saw my first Ferrari Enzo on June 20, 2015, at the Newtown Car Show
          in Newtown, CT. It was displayed next to its younger brother, a
          LaFerrari owned by the same gentleman, both painted in Giallo Modena.
        </p>
      </div>
    </div>
  );
};

export default CarCard;
