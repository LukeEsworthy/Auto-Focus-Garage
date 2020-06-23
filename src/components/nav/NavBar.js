import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
  };

  return (
    <header>
      <div className="logo-and-title">
        <picture>
          <img
            src={require("./Logo 2 final.png")}
            alt="Auto Focus Garage Logo"
          />
        </picture>
        <h1 className="site-title">
          Auto Focus Garage
          <p className="site-title">Your car spotting database</p>
        </h1>
      </div>
      <nav>
        <ul className="container">
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
          ) : null}
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/cars">
                Garage
              </Link>
            </li>
          ) : null}
          {props.hasUser ? (
            <li>
              <span className="nav-link" onClick={handleLogout}>
                Logout
              </span>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
