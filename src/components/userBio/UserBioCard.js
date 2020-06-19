import React from "react";
import "./UserBioCard.css";

const UserBioCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h5>
          Name: <span className="card-userBioName">Luke</span>
        </h5>
        <p>Location: <span>Nashville area</span></p>
        <p>
          Equipment: <span>Canon Rebel T3i, 50mm prime, 70-200mm, 18-50mm, Røde stereo
          mic, Audio Technica pro stereo mic, iPhone Xs Max</span>
        </p>
        <p>Favorite Car: <span>Ferrari 430 Scuderia</span></p>
        <p>
          Bio: <span>My passion for cars (or really anything with a motor) started
          when I was around 10. I begged my dad to let me start mowing the grass
          so that I could drive the riding lawn mower. When he finally gave in,
          we had to wrap iron chains around the seat because I didn't weigh
          enough and without the chain, the mower's safety sensor would cut the
          engine off. I finally got behind the wheel of a car when I was 14 and
          that excitement has never gone away. I have been fortunate to have
          driven and worked on a lot of different cars, and through that have
          grown an immense appreciation to the design and engineering put into
          cars. Cars truly are art, and they invoke many different emotions. The
          look, the sound, the feeling of smooth, cool, shiny metal and g-forces
          pushing you back into the seat, the smell of gasoline, exhaust and
          burnt rubber. Some of the best things in my life have happened in,
          around or because of cars, and those memories are ones that I will
          hold on to forever.{" "}</span>
        </p>
      </div>
    </div>
  );
};
export default UserBioCard;
