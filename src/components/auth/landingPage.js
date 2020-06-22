import React from "react";
import "./auth.css";

const LandingPage = (props) => {
  const handleLoginView = () => {
    props.history.push("/login");
  };

  const handleRegisterView = () => {
    props.history.push("/register");
  };

  return (
    <div className="landingPage">
      <button type="button" onClick={handleLoginView} className="loginButton">
        Login
      </button>
      <button
        type="button"
        onClick={handleRegisterView}
        className="registerButton"
      >
        Register
      </button>
    </div>
  );
};

export default LandingPage;
